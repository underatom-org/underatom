#!/usr/bin/env node
import { add } from "@/src/commands/add";
import { init } from "@/src/commands/init";
import { Command } from "commander";

import packageJson from "../package.json";

process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));

function main() {
  const program = new Command()
    .name("underatom")
    .description("add components and dependencies to your project")
    .version(packageJson.version || "1.0.0", "-v, --version", "display the version number");

  program.addCommand(init).addCommand(add);

  program.parse();
}

main();
