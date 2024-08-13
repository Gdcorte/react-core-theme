import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

import nodeResolve from "@rollup/plugin-node-resolve";
import tsConfigPaths from "rollup-plugin-tsconfig-paths";
import pkg from "./package.json" assert { type: "json" };

const testFiles = [
  "coverage",
  ".storybook",
  "./node_modules/.bin/*",
  "storybook-static",
  "**/__snapshots__/*",
  "**/__tests__",
  "**/*.test.js+(|x)",
  "**/*.test.ts+(|x)",
  "**/*.mdx",
  "**/*.story.ts+(|x)",
  "**/*.story.js+(|x)",
  "**/*.stories.ts+(|x)",
  "**/*.stories.js+(|x)",
  "vitest.config.ts",
];

const rollupConfigs = [
  {
    input: "src/index.tsx",
    external: [],
    plugins: [
      typescript({
        tsconfig: "./tsconfig.json",
        rootDir: "src",
        declaration: false,
        declarationDir: undefined,
        exclude: testFiles,
      }),
      peerDepsExternal(),
    ],
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true,
        name: pkg.name,
      },
      {
        file: pkg.module,
        format: "esm",
        sourcemap: true,
        name: pkg.name,
      },
    ],
  },
  {
    input: "src/index.tsx",
    plugins: [
      tsConfigPaths(),
      nodeResolve(),
      dts({ tsconfig: "./tsconfig.json", exclude: testFiles }),
    ],
    external: [/\.(sc|sa|c)ss$/],
    output: [{ file: pkg.types, format: "es" }],
  },
];

export default rollupConfigs;
