import { promises as fs } from "fs";
import { tmpdir } from "os";
import path from "path";
import type { Config } from "@/src/utils/get-config";
import { transformImport } from "@/src/utils/transformers/transform-import";
import { Project, ScriptKind } from "ts-morph";
import type { SourceFile } from "ts-morph";

export type TransformOpts = {
  filename: string;
  raw: string;
  config: Config;
};

export type Transformer<Output = SourceFile> = (
  opts: TransformOpts & {
    sourceFile: SourceFile;
  },
) => Output;

const project = new Project({
  compilerOptions: {},
});

async function createTempSourceFile(filename: string) {
  const dir = await fs.mkdtemp(path.join(tmpdir(), "underatom-"));
  return path.join(dir, filename);
}

export async function transform(opts: TransformOpts, transformers: Transformer[] = [transformImport]) {
  const tempFile = await createTempSourceFile(opts.filename);
  const sourceFile = project.createSourceFile(tempFile, opts.raw, {
    scriptKind: ScriptKind.TSX,
  });

  for (const transformer of transformers) {
    void transformer({ sourceFile, ...opts });
  }

  return sourceFile.getText();
}
