import type { Config } from "@/src/utils/get-config";
import { handleError } from "@/src/utils/handle-error";
import { logger } from "@/src/utils/logger";
import { registryResolveItemsTree } from "@/src/utils/registry";
import { spinner } from "@/src/utils/spinner";
import { updateDependencies } from "@/src/utils/updaters/update-dependencies";
import { updateFiles } from "@/src/utils/updaters/update-files";
import { updateTailwindConfig } from "@/src/utils/updaters/update-tailwind-config";
import type { AddOptions } from "~/commands/add";

export async function addComponents(
  components: string[],
  config: Config,
  options: Pick<AddOptions, "silent" | "overwrite" | "design" | "path" | "key"> & { isNewProject: boolean },
) {
  const registrySpinner = spinner(`Checking registry.`, {
    silent: options.silent,
  })?.start();
  const tree = await registryResolveItemsTree(
    components,
    options.isNewProject ?? false,
    options.design,
    options.path,
    options.key,
  );
  if (!tree) {
    registrySpinner?.fail();
    return handleError(new Error("Failed to fetch components from registry."));
  }
  registrySpinner?.succeed();

  await updateTailwindConfig(tree.tailwind?.config, config, {
    silent: options.silent,
  });

  await updateDependencies(tree.dependencies, config, {
    silent: options.silent,
  });
  await updateFiles(tree.files, config, {
    overwrite: options.overwrite,
    silent: options.silent,
  });

  if (tree.docs) {
    logger.info(tree.docs);
  }
}
