import { baseEsLintConfig } from "@repo/eslint-config/config";

/** @type {import("eslint").Linter.Config} */
const webConifg = baseEsLintConfig.append({
  ignores: ["./messages/*.json.ts"],
});
export default webConifg;
