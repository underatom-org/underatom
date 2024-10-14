import { promises as fs } from "fs";
import path from "path";
import { preFlightInit } from "@/src/preflights/preflight-init";
import { addComponents } from "@/src/utils/add-components";
import * as ERRORS from "@/src/utils/errors";
import {
  DEFAULT_COMPONENTS,
  DEFAULT_TAILWIND_CONFIG,
  DEFAULT_TAILWIND_CSS,
  DEFAULT_UTILS,
  getConfig,
  rawConfigSchema,
  resolveConfigPaths,
} from "@/src/utils/get-config";
import type { Config } from "@/src/utils/get-config";
import { getProjectConfig, getProjectInfo } from "@/src/utils/get-project-info";
import { handleError } from "@/src/utils/handle-error";
import { highlighter } from "@/src/utils/highlighter";
import { logger } from "@/src/utils/logger";
import { spinner } from "@/src/utils/spinner";
import { updateTailwindContent } from "@/src/utils/updaters/update-tailwind-content";
import { Command } from "commander";
import prompts from "prompts";
import { z } from "zod";

export const initOptionsSchema = z.object({
  cwd: z.string(),
  components: z.array(z.string()).optional(),
  yes: z.boolean(),
  defaults: z.boolean(),
  force: z.boolean(),
  silent: z.boolean(),
  isNewProject: z.boolean(),
  srcDir: z.boolean().optional(),
});

export const init = new Command()
  .name("init")
  .description("initialize your project and install dependencies")
  .argument("[components...]", "the components to add or a url to the component.")
  .option("-y, --yes", "skip confirmation prompt.", true)
  .option("-d, --defaults,", "use default configuration.", false)
  .option("-f, --force", "force overwrite of existing configuration.", false)
  .option("-c, --cwd <cwd>", "the working directory. defaults to the current directory.", process.cwd())
  .option("-s, --silent", "mute output.", false)
  .option("--src-dir", "use the src directory when creating a new project.", false)
  .action(async (components: string[], opts: { cwd: string }) => {
    try {
      const options = initOptionsSchema.parse({
        ...opts,
        cwd: path.resolve(opts.cwd),
        isNewProject: true,
        components,
      });

      await runInit(options);

      logger.log(`${highlighter.success("Success!")} Project initialization completed.\nYou may now add components.`);
      logger.break();
    } catch (error) {
      logger.break();
      handleError(error);
    }
  });

export async function runInit(
  options: z.infer<typeof initOptionsSchema> & {
    skipPreflight?: boolean;
  },
) {
  let projectInfo;
  if (!options.skipPreflight) {
    const preflight = await preFlightInit(options);
    if (preflight.errors[ERRORS.MISSING_DIR_OR_EMPTY_PROJECT]) {
      process.exit(1);
    }
    projectInfo = preflight.projectInfo;
  } else {
    projectInfo = await getProjectInfo(options.cwd);
  }

  const projectConfig = await getProjectConfig(options.cwd, projectInfo);
  const config = projectConfig
    ? promptForMinimalConfig(projectConfig)
    : await promptForConfig(await getConfig(options.cwd));

  if (!options.yes) {
    const result = await prompts({
      type: "confirm",
      name: "proceed",
      message: `Write configuration to ${highlighter.info("components.json")}. Proceed?`,
      initial: true,
    });

    if (!result.proceed) {
      process.exit(0);
    }
  }

  // Write components.json.
  const componentSpinner = spinner(`Writing components.json.`).start();
  const targetPath = path.resolve(options.cwd, "components.json");
  await fs.writeFile(targetPath, JSON.stringify(config, null, 2), "utf8");
  componentSpinner.succeed();

  // Add components.
  const fullConfig = resolveConfigPaths(options.cwd, config);
  const components = ["index", ...(options.components ?? [])];
  await addComponents(components, fullConfig, {
    // Init will always overwrite files.
    overwrite: true,
    silent: options.silent,
    isNewProject: options.isNewProject || projectInfo?.framework.name === "next-app",
  });

  // If a new project is using src dir, let's update the tailwind content config.
  // TODO: Handle this per framework.
  if (options.isNewProject && options.srcDir) {
    await updateTailwindContent(["./src/**/*.{js,ts,jsx,tsx,mdx}"], fullConfig, {
      silent: options.silent,
    });
  }

  return fullConfig;
}

async function promptForConfig(defaultConfig: Config | null = null) {
  logger.info("");
  const options = await prompts([
    {
      type: "text",
      name: "tailwindCss",
      message: `Where is your ${highlighter.info("global CSS")} file?`,
      initial: defaultConfig?.tailwind.css ?? DEFAULT_TAILWIND_CSS,
    },
    {
      type: "text",
      name: "tailwindConfig",
      message: `Where is your ${highlighter.info("tailwind.config.js")} located?`,
      initial: defaultConfig?.tailwind.config ?? DEFAULT_TAILWIND_CONFIG,
    },
    {
      type: "text",
      name: "components",
      message: `Configure the import alias for ${highlighter.info("components")}:`,
      initial: defaultConfig?.aliases.components ?? DEFAULT_COMPONENTS,
    },
    {
      type: "text",
      name: "utils",
      message: `Configure the import alias for ${highlighter.info("utils")}:`,
      initial: defaultConfig?.aliases.utils ?? DEFAULT_UTILS,
    },
  ]);

  return rawConfigSchema.parse({
    tailwind: {
      config: options.tailwindConfig as string,
      css: options.tailwindCss as string,
    },
    aliases: {
      utils: options.utils as string,
      components: options.components as string,
      // TODO: fix this.
      lib: (options.components as string).replace(/\/components$/, "lib"),
      hooks: (options.components as string).replace(/\/components$/, "hooks"),
    },
  });
}

function promptForMinimalConfig(defaultConfig: Config) {
  return rawConfigSchema.parse({
    tailwind: {
      ...defaultConfig?.tailwind,
    },
    aliases: defaultConfig?.aliases,
  });
}
