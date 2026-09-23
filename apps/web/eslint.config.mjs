import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import { shadcnConfig } from "@repo/eslint-config/shadcn";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  ...shadcnConfig,
  {
    settings: {
      react: {
        version: "19",
      },
    },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "eslint.config.mjs",
  ]),
]);

export default eslintConfig;
