import type { Config } from "@/src/utils/get-config";
import { handleError } from "@/src/utils/handle-error";
import type { RegistryItem, registryItemFileSchema, registryItemSchema } from "@/src/utils/registry/schema";
import { registryIndexSchema, registryResolvedItemsTreeSchema } from "@/src/utils/registry/schema";
import deepmerge from "deepmerge";
import type { z } from "zod";

const registryURL = "https://api.underatom.com/registry";

async function fetchRegistry(design: "eve" | "retro", url: string, key?: string) {
  try {
    const headers: HeadersInit = key ? { "licence-key": key } : {};
    const response = await fetch(url, {
      headers,
      body: JSON.stringify({
        design,
      }),
    });
    return response.json();
  } catch (error) {
    handleError(error);
    return null;
  }
}

export async function fetchComponents(
  design: "eve" | "retro",
  url = registryURL,
  key?: string,
): Promise<RegistryItem[]> {
  return fetchRegistry(design, url + "/components", key) as Promise<RegistryItem[]>;
}

export async function fetchUtils(design: "eve" | "retro", url: string, key?: string): Promise<RegistryItem[]> {
  return fetchRegistry(design, url + "/utils", key) as Promise<RegistryItem[]>;
}

export async function getRegistryIndex(
  componentNames: string[],
  isNewProject: boolean,
  design: "eve" | "retro",
  url = registryURL,
  key?: string,
) {
  const filteredComponents = (await fetchComponents(design, url, key)).filter((component) =>
    componentNames.includes(component.name),
  );
  const utilsRegistry = await fetchUtils(design, url, key);
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

export async function registryResolveItemsTree(
  names: z.infer<typeof registryItemSchema>["name"][],
  isNewProject: boolean,
  design: "eve" | "retro",
  url?: string,
  key?: string,
) {
  try {
    // If we're resolving the index, we want it to go first.
    if (names.includes("index")) {
      names.unshift("index");
    }

    const payload = await getRegistryIndex(names, isNewProject, design, url, key);

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
