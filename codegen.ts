import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000/graphql",
  documents: "./src/**/*.graphql",
  generates: {
    "src/graphql/generated/type.ts": { plugins: ["typescript"] },
    "src/": {
      preset: "near-operation-file",
      presetConfig: {
        baseTypesPath: "~@/src/graphql/generated/type",
      },
      plugins: ["typescript-operations", "typescript-urql", "typescript-msw"],
      // config: {
      //   withComponent: false,
      //   withHOC: false,
      //   withHooks: true,
      // },
    },
    // "./graphql.schema.json": {
    //   plugins: ["introspection"],
    // },
  },
};

export default config;
