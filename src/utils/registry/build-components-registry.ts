import type { RegistryItem } from "./schema";
import path from "path";
import fs from "fs-extra";
import { fileURLToPath } from "url";
import type { CustomThemeConfig } from "tailwindcss/types/config";
import type { ComponentRegistry } from "./components-registry";
import { componentsRegistry } from "./components-registry";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootPath = path.join(__dirname, "..", "..", "..", "template", "base", "src", "components");
const rootPathStylingTypes = path.join(__dirname, "..", "..", "..", "template", "base", "src", "styles");
const rootPathStyling = path.join(__dirname, "..", "..", "..", "template", "styles", "eve", "tailwind-variants");
const registryPath = path.join(__dirname, "..", "..", "..", "registry", "react", "tailwind-variants");

for await (const component of componentsRegistry) {
  const componentPath = path.join(rootPath, component.relativePath);
  const componentFiles = await fs.readdir(componentPath);
  const atomsFile = componentFiles.find((file) => file.endsWith(".tsx") && file.includes("atoms"));
  const underatomsFile = componentFiles.find((file) => file.endsWith(".tsx") && file.includes("underatoms"));
  if (!atomsFile || !underatomsFile) {
    console.log(`${component.name} has no atoms or underatoms file`);
    continue;
  }
  let atomsFileContent = await fs.readFile(path.join(componentPath, atomsFile), "utf-8");
  atomsFileContent = atomsFileContent.replaceAll("../../../styles/", "./");
  atomsFileContent = atomsFileContent.replaceAll(`../../${component.relativePath}/`, "./");
  atomsFileContent = atomsFileContent.replaceAll("../../../assets/Icons", "../../../utils/Icons");
  let underatomsFileContent = await fs.readFile(path.join(componentPath, underatomsFile), "utf-8");
  underatomsFileContent = underatomsFileContent.replaceAll("../../../assets/Icons", "../../../utils/Icons");
  underatomsFileContent = underatomsFileContent.replaceAll("../../../styles/", "./");
  underatomsFileContent = underatomsFileContent.replaceAll("../../../_utils", "../../../utils/utils");
  let stylingFileContent = await getStylingFileContent(component);
  stylingFileContent = stylingFileContent?.replaceAll("../_utils", "../../../utils/utils");
  stylingFileContent = `import { tv } from "../../../utils/extendedTV";\n${stylingFileContent}`;

  if (!stylingFileContent) {
    console.log(`${component.name} has no styling file content`);
    continue;
  }

  component.files = [
    {
      type: "registry:ui",
      path: path.join("ui", component.relativePath, atomsFile),
      content: atomsFileContent,
      target: path.join("underatom", "components", component.relativePath, atomsFile),
    },
    {
      type: "registry:ui",
      path: path.join("ui", component.relativePath, underatomsFile),
      content: underatomsFileContent,
      target: path.join("underatom", "components", component.relativePath, underatomsFile),
    },
    {
      type: "registry:ui",
      path: path.join("ui", component.relativePath, component.stylingName),
      content: stylingFileContent,
      target: path.join("underatom", "components", component.relativePath, component.stylingName),
    },
  ];

  // const filePath = path.join(registryPath, component.relativePath + ".json");
  // await fs.ensureDir(path.dirname(filePath));
  // await fs.writeFile(filePath, JSON.stringify(component, null, 2), "utf-8");
}

const filePath = path.join(registryPath, "components.ts");
await fs.ensureDir(path.dirname(filePath));
await fs.writeFile(
  filePath,
  "export const componentsRegistry = " + JSON.stringify(componentsRegistry, null, 2),
  "utf-8",
);

const utilsPath = path.join(__dirname, "..", "..", "..", "template", "base", "src", "_utils.tsx");
const utilsContent = await fs.readFile(utilsPath, "utf-8");
const iconsPath = path.join(__dirname, "..", "..", "..", "template", "assets", "eve", "Icons.tsx");
const iconsContent = await fs.readFile(iconsPath, "utf-8");
const tvPath = path.join(
  __dirname,
  "..",
  "..",
  "..",
  "template",
  "configs",
  "tailwind-variants",
  "eve",
  "extendedTV.ts",
);
const tvContent = await fs.readFile(tvPath, "utf-8");
const themePath = path.join(__dirname, "..", "..", "..", "template", "configs", "tailwind-variants", "eve", "theme.ts");
const themeContent = await fs.readFile(themePath, "utf-8");
const themeObjectRegex = /=\s+((?!satisfies)\S+\s+)+/g;
const themeObjectAsString = themeContent.match(themeObjectRegex)?.[0].split("=")[1];
console.log("themeObjectAsString", themeObjectAsString);
const themeObject: Partial<CustomThemeConfig> = themeObjectAsString
  ? (eval(`const theme = ${themeObjectAsString}; theme`) as Partial<CustomThemeConfig>)
  : {};

console.log(JSON.stringify(themeObject, null, 2));

export const utilFiles: RegistryItem[] = [
  {
    name: "utils",
    type: "registry:lib",
    description: "Various utilities",
    files: [
      {
        type: "registry:lib",
        path: path.join("utils", "utils.tsx"),
        content: utilsContent,
        target: path.join("underatom", "utils", "utils.tsx"),
      },
    ],
  },
  {
    name: "Icons",
    type: "registry:lib",
    description: "Icons",
    dependencies: ["@tabler/icons-react"],
    files: [
      {
        type: "registry:lib",
        path: path.join("utils", "Icons.tsx"),
        content: iconsContent,
        target: path.join("underatom", "utils", "Icons.tsx"),
      },
    ],
  },
  {
    name: "extendedTV",
    type: "registry:lib",
    description: "Extended Tailwind Variants",
    dependencies: ["tailwind-variants"],
    files: [
      {
        type: "registry:lib",
        path: path.join("utils", "extendedTV.ts"),
        content: tvContent,
        target: path.join("underatom", "utils", "extendedTV.ts"),
      },
    ],
  },
  {
    name: "theme",
    type: "registry:lib",
    description: "Theme",
    tailwind: {
      config: {
        theme: themeObject,
      },
    },
  },
];

const utilsFilePath = path.join(registryPath, "utils.ts");
await fs.ensureDir(path.dirname(utilsFilePath));
await fs.writeFile(utilsFilePath, "export const utilsRegistry = " + JSON.stringify(utilFiles, null, 2), "utf-8");

async function getStylingFileContent(component: ComponentRegistry) {
  const stylingFileName = component.stylingName;
  try {
    const templatePath = path.join(rootPathStylingTypes, stylingFileName);
    const stylePath = path.join(rootPathStyling, stylingFileName);
    const styleContent = await fs.readFile(stylePath, "utf-8");
    let templateContent = await fs.readFile(templatePath, "utf-8");

    // replace classes
    const styleRegex = /const \w+Class\s*((?!export)\S+\s+)+/g;
    const styleObjectsAsString = styleContent.match(styleRegex);
    const stringsToReplace = templateContent.match(styleRegex);
    if (!styleObjectsAsString || !stringsToReplace) return;
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
    if (!layoutStyleObjectsAsString || !layoutStringsToReplace) return;
    for (const [, stringToReplace] of layoutStringsToReplace.entries()) {
      const identifier = stringToReplace.match(/const \w+Layout =/)?.[0];
      if (!identifier) continue;
      const styleObjectAsString = layoutStyleObjectsAsString.find((s) => s.includes(identifier));
      if (!styleObjectAsString) continue;
      templateContent = templateContent.replace(stringToReplace, styleObjectAsString);
    }

    return templateContent;

    // if (stylingLibrary === "tailwind-variants") {
    //   const templateContent = await fs.readFile(templatePath, "utf-8");
    //   const importString = `import { tv } from "../../extendedTV";`;
    //   const newComponent = importString + "\n" + templateContent;
    //   await fs.writeFile(templatePath, newComponent);
    // }

    // if (stylingLibrary === "panda") {
    //   const templateContent = await fs.readFile(templatePath, "utf-8");
    //   const importString = `import { cva, css } from '../../styled-system/css';`;
    //   const newComponent = importString + "\n" + templateContent;
    //   await fs.writeFile(templatePath, newComponent);
    // }
  } catch (e) {
    console.log(e);
    return;
  }
}
