import { plugin as shadcn } from "@shadcn/lint";
import tsParser from "@typescript-eslint/parser";

/**
 * Shared ESLint configuration for shadcn design system rules.
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const shadcnConfig = [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      shadcn,
    },
    settings: {
      shadcn: {
        ui: "@repo/ui",
      },
    },
    rules: {
      "shadcn/no-arbitrary-values": ["error", { allow: ["layout"] }],
      "shadcn/no-restyle": ["error", { allow: ["layout"] }],
    },
  },
];

export default shadcnConfig;
