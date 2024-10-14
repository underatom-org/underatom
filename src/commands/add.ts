import path from "path";
import { runInit } from "@/src/commands/init";
import { preFlightAdd } from "@/src/preflights/preflight-add";
import { addComponents } from "@/src/utils/add-components";
import * as ERRORS from "@/src/utils/errors";
import { handleError } from "@/src/utils/handle-error";
import { highlighter } from "@/src/utils/highlighter";
import { logger } from "@/src/utils/logger";
import { Command } from "commander";
import prompts from "prompts";
import { z } from "zod";
import { fetchComponents } from "~/utils/registry";

export const addOptionsSchema = z.object({
  components: z.array(z.string()).optional(),
  yes: z.boolean(),
  overwrite: z.boolean(),
  cwd: z.string(),
  all: z.boolean(),
  path: z.string().optional(),
  silent: z.boolean(),
  srcDir: z.boolean().optional(),
});

export const add = new Command()
  .name("add")
  .description("add a component to your project")
  .argument("[components...]", "the components to add or a url to the component.")
  .option("-y, --yes", "skip confirmation prompt.", false)
  .option("-o, --overwrite", "overwrite existing files.", false)
  .option("-c, --cwd <cwd>", "the working directory. defaults to the current directory.", process.cwd())
  .option("-a, --all", "add all available components", false)
  .option("-p, --path <path>", "the path to add the component to.")
  .option("-s, --silent", "mute output.", false)
  .option("--src-dir", "use the src directory when creating a new project.", false)
  .action(async (components: string[], opts: { cwd: string }) => {
    try {
      const options = addOptionsSchema.parse({
        ...opts,
        components,
        cwd: path.resolve(opts.cwd),
      });

      // Confirm if user is installing themes.
      // For now, we assume a theme is prefixed with "theme-".
      const isTheme = options.components?.some((component) => component.includes("theme-"));
      if (!options.yes && isTheme) {
        logger.break();
        const promptResult = await prompts({
          type: "confirm",
          name: "confirm",
          message: highlighter.warn(
            "You are about to install a new theme. \nExisting CSS variables will be overwritten. Continue?",
          ),
        });
        if (!promptResult.confirm) {
          logger.break();
          logger.log("Theme installation cancelled.");
          logger.break();
          process.exit(1);
        }
      }

      if (!options.components?.length) {
        options.components = await promptForRegistryComponents(options);
      }

      // eslint-disable-next-line prefer-const
      let { errors, config } = await preFlightAdd(options);

      // No components.json file. Prompt the user to run init.
      if (errors[ERRORS.MISSING_CONFIG]) {
        const result = await prompts({
          type: "confirm",
          name: "proceed",
          message: `You need to create a ${highlighter.info("components.json")} file to add components. Proceed?`,
          initial: true,
        });

        if (!result.proceed) {
          logger.break();
          process.exit(1);
        }

        config = await runInit({
          cwd: options.cwd,
          yes: true,
          force: true,
          defaults: false,
          skipPreflight: false,
          silent: true,
          isNewProject: true,
          srcDir: options.srcDir,
        });
      }

      if (errors[ERRORS.MISSING_DIR_OR_EMPTY_PROJECT]) {
        logger.break();
        process.exit(1);
      }

      if (!config) {
        throw new Error(`Failed to read config at ${highlighter.info(options.cwd)}.`);
      }

      await addComponents(options.components, config, options);
    } catch (error) {
      logger.break();
      handleError(error);
    }
  });

async function promptForRegistryComponents(options: z.infer<typeof addOptionsSchema>) {
  const registryIndex = fetchComponents();
  if (!registryIndex) {
    logger.break();
    handleError(new Error("Failed to fetch registry index."));
    return [];
  }

  if (options.all) {
    return registryIndex.map((entry) => entry.name);
  }

  if (options.components?.length) {
    return options.components;
  }

  const promptResult = await prompts({
    type: "multiselect",
    name: "components",
    message: "Which components would you like to add?",
    hint: "Space to select. A to toggle all. Enter to submit.",
    instructions: false,
    choices: registryIndex
      .filter((entry) => entry.type === "registry:ui")
      .map((entry) => ({
        title: entry.name,
        value: entry.name,
        selected: options.all ? true : options.components?.includes(entry.name),
      })),
  });
  const components = promptResult.components as string[];

  if (!components?.length) {
    logger.warn("No components selected. Exiting.");
    logger.info("");
    process.exit(1);
  }

  const result = z.array(z.string()).safeParse(components);
  if (!result.success) {
    logger.error("");
    handleError(new Error("Something went wrong. Please try again."));
    return [];
  }
  return result.data;
}
