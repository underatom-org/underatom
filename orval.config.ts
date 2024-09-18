import { defineConfig } from "orval";

const config = defineConfig({
  backend: {
    input: {
      target: "http://127.0.0.1:3001/v1/docs-json",
    },
    output: {
      target: "template/base/src/docs/extra/voting/utils/api.ts",
      // schemas: "template/base/src/docs/extra/voting/utils/api-types",
      client: "react-query",
      mock: false,
      tslint: true,
      override: {
        mutator: {
          path: "template/base/src/docs/extra/voting/utils/mutator.ts",
          name: "customInstance",
        },
      },
    },
    hooks: {
      afterAllFilesWrite: "npx prettier --write ./template/base/src/docs/extra/voting/utils/api.ts",
    },
  },
});

export default config;
