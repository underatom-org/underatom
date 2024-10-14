import type { Config } from "@/src/utils/get-config";
import type { Transformer } from "@/src/utils/transformers";

export const transformImport: Transformer = ({ sourceFile, config }) => {
  const importDeclarations = sourceFile.getImportDeclarations();

  for (const importDeclaration of importDeclarations) {
    const moduleSpecifier = updateImportAliases(importDeclaration.getModuleSpecifierValue(), config);

    importDeclaration.setModuleSpecifier(moduleSpecifier);

    // Replace `import { cn } from "@/lib/utils"`
    if (moduleSpecifier == "@/lib/utils") {
      const namedImports = importDeclaration.getNamedImports();
      const cnImport = namedImports.find((i) => i.getName() === "cn");
      if (cnImport) {
        importDeclaration.setModuleSpecifier(moduleSpecifier.replace(/^@\/lib\/utils/, config.aliases.utils));
      }
    }
  }

  return sourceFile;
};

function updateImportAliases(moduleSpecifier: string, config: Config) {
  // Not a local import.
  if (!moduleSpecifier.startsWith("@/")) {
    return moduleSpecifier;
  }

  // Not a registry import.
  if (!moduleSpecifier.startsWith("@/registry/")) {
    // We fix the alias an return.
    const alias = config.aliases.components.charAt(0);
    return moduleSpecifier.replace(/^@\//, `${alias}/`);
  }

  if (config.aliases.components && moduleSpecifier.match(/^@\/registry\/(.+)\/components/)) {
    return moduleSpecifier.replace(/^@\/registry\/(.+)\/components/, config.aliases.components);
  }

  return moduleSpecifier.replace(/^@\/registry\/[^/]+/, config.aliases.components);
}
