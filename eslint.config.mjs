import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser, // setTimeout, window, etc.
        Vue: "readonly",
      },
    },
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,
];
