import { intro, outro, select, text } from "@clack/prompts";
import path from "path";
import fs from "fs-extra";
import { fileURLToPath } from "url";
import { program } from "commander";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

program
  .option("--dev")
  .option("--watchMode")
  .option("--name <string>")
  .option("--designSystem <designSystem>", "choose design system", ["eve"])
  .option("--stylingLibrary <stylingLibrary>", "choose styling library", ["tailwind-variants"])
  .parse();

const options = program.opts<{
  dev: boolean;
  name: string;
  designSystem: "eve";
  stylingLibrary: "tailwind-variants";
  watchMode: boolean;
}>();

let appName: string | symbol | undefined;
let designSystem: symbol | "eve" | undefined;
let stylingLibrary: symbol | "tailwind-variants" | undefined;
const watchMode = options.watchMode;

if (options.dev) {
  appName = options.name;
  designSystem = options.designSystem;
  stylingLibrary = options.stylingLibrary;
} else {
  intro(`create-my-app`);

  appName = await text({
    message: "What's the name of your app?",
    placeholder: "My App",
  });

  designSystem = await select({
    message: "Pick a design system.",
    options: [{ value: "eve", label: "Eve" }],
  });

  stylingLibrary = await select({
    message: "Pick a styling library.",
    options: [
      { value: "tailwind-variants", label: "tailwind-variants" },
      // { value: "panda", label: "PandaCSS" },
    ],
  });
}

if (!appName || !designSystem || !stylingLibrary) {
  console.log("Please provide all the options");
  process.exit(1);
}

const currentPath = process.cwd();
const projectPath = `${currentPath}/${appName.toString()}`;

if (!watchMode) {
  const templatePath = `${__dirname}/../template/base`;
  await fs.copy(templatePath, projectPath);
} else {
  const templatePath = `${__dirname}/../template/base/src`;
  await fs.copy(templatePath, `${projectPath}/src`);
}

if (stylingLibrary === "tailwind-variants") {
  const tvPath = `${__dirname}/../template/configs/tailwind-variants`;
  if (!watchMode) {
    await fs.copy(`${tvPath}/tailwind.config.ts`, `${projectPath}/tailwind.config.ts`);
    await fs.copy(`${tvPath}/postcss.config.cjs`, `${projectPath}/postcss.config.cjs`);
    await fs.copy(`${tvPath}/${designSystem.toString()}/theme.ts`, `${projectPath}/theme.ts`);
    await fs.copy(`${tvPath}/${designSystem.toString()}/extendedTV.ts`, `${projectPath}/extendedTV.ts`);
  }
  await fs.copy(`${tvPath}/styles.css`, `${projectPath}/src/styles.css`);
}

// if (stylingLibrary === "panda") {
//   const pandaPath = `${__dirname}/../template/configs/panda`;
//   if (!watchMode) {
//     await fs.copy(`${pandaPath}/panda.config.ts`, `${projectPath}/panda.config.ts`);
//     await fs.copy(`${pandaPath}/postcss.config.cjs`, `${projectPath}/postcss.config.cjs`);
//     await fs.copy(`${pandaPath}/${designSystem.toString()}/theme.ts`, `${projectPath}/theme.ts`);
//   }
//   await fs.copy(`${pandaPath}/styles.css`, `${projectPath}/src/styles.css`);
// }

const assetsPath = `${__dirname}/../template/assets/${designSystem.toString()}`;
await fs.copy(assetsPath, `${projectPath}/src/assets`);

const stylesTemplatePath = `${projectPath}/src/styles`;
const stylesPath = `${__dirname}/../template/styles/${designSystem.toString()}/${stylingLibrary.toString()}`;
const stylingFileNames = await fs.readdir(stylesTemplatePath);
for (const stylingFileName of stylingFileNames) {
  try {
    const templatePath = `${stylesTemplatePath}/${stylingFileName}`;
    const stylePath = `${stylesPath}/${stylingFileName}`;
    const styleContent = await fs.readFile(stylePath, "utf-8");
    let templateContent = await fs.readFile(templatePath, "utf-8");

    // replace classes
    const styleRegex = /const \w+Class\s*((?!export)\S+\s+)+/g;
    const styleObjectsAsString = styleContent.match(styleRegex);
    const stringsToReplace = templateContent.match(styleRegex);
    if (!styleObjectsAsString || !stringsToReplace) continue;
    for (const [, stringToReplace] of stringsToReplace.entries()) {
      const identifier = stringToReplace.match(/const \w+Class =/)?.[0];
      if (!identifier) continue;
      const styleObjectAsString = styleObjectsAsString.find((s) => s.includes(identifier));
      if (!styleObjectAsString) continue;
      templateContent = templateContent.replace(stringToReplace, styleObjectAsString);
    }

    // replace Layouts
    const layoutStyleRegex = /const \w+Layout\s*((?!export)\S+\s+)+/g;
    const layoutStyleObjectsAsString = styleContent.match(layoutStyleRegex);
    const layoutStringsToReplace = templateContent.match(layoutStyleRegex);
    if (!layoutStyleObjectsAsString || !layoutStringsToReplace) continue;
    for (const [, stringToReplace] of layoutStringsToReplace.entries()) {
      const identifier = stringToReplace.match(/const \w+Layout =/)?.[0];
      if (!identifier) continue;
      const styleObjectAsString = layoutStyleObjectsAsString.find((s) => s.includes(identifier));
      if (!styleObjectAsString) continue;
      templateContent = templateContent.replace(stringToReplace, styleObjectAsString);
    }

    await fs.writeFile(templatePath, templateContent);

    if (stylingLibrary === "tailwind-variants") {
      const templateContent = await fs.readFile(templatePath, "utf-8");
      const importString = `import { tv } from "../../extendedTV";`;
      const newComponent = importString + "\n" + templateContent;
      await fs.writeFile(templatePath, newComponent);
    }

    // if (stylingLibrary === "panda") {
    //   const templateContent = await fs.readFile(templatePath, "utf-8");
    //   const importString = `import { cva, css } from '../../styled-system/css';`;
    //   const newComponent = importString + "\n" + templateContent;
    //   await fs.writeFile(templatePath, newComponent);
    // }
  } catch (e) {
    console.log(e);
    continue;
  }
}

// package.json
const packagePath = `${projectPath}/package.json`;
const packageContent = fs.readJsonSync(packagePath) as {
  name: string;
  dependencies: Record<string, string>;
  devDependencies: Record<string, string>;
  scripts: Record<string, string>;
};
if (stylingLibrary === "tailwind-variants") {
  packageContent.name = appName.toString();
  packageContent.dependencies = {
    ...packageContent.dependencies,
    "tailwind-variants": "^0.2.1",
  };
  packageContent.devDependencies = {
    ...packageContent.devDependencies,
    tailwindcss: "^3.4.3",
    postcss: "^8.4.31",
    "postcss-loader": "^7.3.3",
    "postcss-import": "^15.1.0",
  };
}
// if (stylingLibrary === "panda") {
//   packageContent.name = appName.toString();
//   packageContent.devDependencies = {
//     ...packageContent.devDependencies,
//     "@pandacss/dev": "^0.22.1",
//     postcss: "^8.4.32",
//     "postcss-loader": "^7.3.3",
//   };
//   packageContent.scripts = {
//     ...packageContent.scripts,
//     prepare: "panda codegen",
//   };
// }
if (designSystem === "eve") {
  packageContent.dependencies = {
    ...packageContent.dependencies,
    "@tabler/icons-react": "^3.1.0",
  };
}
fs.writeJsonSync(packagePath, packageContent, { spaces: 2 });

if (!options.dev) outro(`You're all set!`);
