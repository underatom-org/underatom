import type { Config } from "@/src/utils/get-config";
import { handleError } from "@/src/utils/handle-error";
import type { registryItemFileSchema } from "@/src/utils/registry/schema";
import { registryIndexSchema, registryItemSchema, registryResolvedItemsTreeSchema } from "@/src/utils/registry/schema";
import deepmerge from "deepmerge";
import { z } from "zod";
import { componentsRegistry } from "../../../registry/react/tailwind-variants/components";
import { utilsRegistry } from "../../../registry/react/tailwind-variants/utils";

export function fetchComponents() {
  return z.array(registryItemSchema).parse(componentsRegistry);
}

export function getRegistryIndex(componentNames: string[], isNewProject: boolean) {
  const filteredComponents = componentsRegistry.filter((component) => componentNames.includes(component.name));
  return registryIndexSchema.parse([...filteredComponents, ...(!isNewProject ? [] : utilsRegistry)]);
}

export function getRegistryItemFileTargetPath(
  file: z.infer<typeof registryItemFileSchema>,
  config: Config,
  override?: string,
) {
  if (override) {
    return override;
  }

  if (file.type === "registry:block" || file.type === "registry:component") {
    return config.resolvedPaths.components;
  }

  // TODO: we put this in components for now.
  // We should move this to pages as per framework.
  if (file.type === "registry:page") {
    return config.resolvedPaths.components;
  }

  return config.resolvedPaths.components;
}

export function registryResolveItemsTree(names: z.infer<typeof registryItemSchema>["name"][], isNewProject: boolean) {
  try {
    // If we're resolving the index, we want it to go first.
    if (names.includes("index")) {
      names.unshift("index");
    }

    const payload = getRegistryIndex(names, isNewProject);

    if (!payload) {
      return null;
    }

    let tailwind = {};
    payload.forEach((item) => {
      tailwind = deepmerge(tailwind, item.tailwind ?? {});
    });

    let docs = "";
    payload.forEach((item) => {
      if (item.docs) {
        docs += `${item.docs}\n`;
      }
    });

    return registryResolvedItemsTreeSchema.parse({
      dependencies: deepmerge.all(payload.map((item) => item.dependencies ?? [])),
      devDependencies: deepmerge.all(payload.map((item) => item.devDependencies ?? [])),
      files: deepmerge.all(payload.map((item) => item.files ?? [])),
      tailwind,
      docs,
    });
  } catch (error) {
    handleError(error);
    return null;
  }
}
