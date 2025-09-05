import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  pluginReact.configs.flat.recommended,
  {
    rules: {
      // Desabilita a exigência de React no escopo para JSX
      "react/react-in-jsx-scope": "off",
      // Desabilita a exigência de declaração de tipos de props
      "react/prop-types": "off",
      // ...outras regras...
    },
  },
]);
