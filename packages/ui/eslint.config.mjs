import { config as reactInternalConfig } from "@repo/eslint-config/react-internal";
import { shadcnConfig } from "@repo/eslint-config/shadcn";
import { defineConfig } from "eslint/config";

export default defineConfig([
  ...reactInternalConfig,
  ...shadcnConfig,
]);
