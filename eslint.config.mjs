import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "error", // Enforce no 'any' type
      "@typescript-eslint/no-require-imports": "error", // Enforce ES6 import style
      "@typescript-eslint/no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": true }], // Enforce no unused variables
      "prefer-const": "error", // Enforce use of 'const' for variables that are never reassigned
      "@typescript-eslint/no-unused-expressions": "error", // Enforce no unused expressions
    },
  },
];



export default eslintConfig;
