import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import stylistic from "@stylistic/eslint-plugin";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: {
      js,
      "@stylistic": stylistic,
    },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      "@stylistic/indent": ["error", 2],
      "@stylistic/semi": ["error", "always"],
      "@stylistic/quotes": [
        "error",
        "double",
        {
          allowTemplateLiterals: "always",
        },
      ],
      "@stylistic/no-multiple-empty-lines": [
        "error",
        {
          max: 2,
          maxEOF: 0,
        },
      ],
      "@stylistic/no-multi-spaces": [
        "error",
        {
          ignoreEOLComments: false,
        },
      ],
      "object-curly-newline": [
        "error",
        {
          ObjectExpression: "always",
          ObjectPattern: {
            multiline: true,
          },
          ImportDeclaration: "never",
          ExportDeclaration: {
            multiline: true,
            minProperties: 3,
          },
        },
      ],
    },
  },
]);
