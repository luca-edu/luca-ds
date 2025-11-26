import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      pluginReact.configs.flat.recommended,
    ],
    languageOptions: { globals: globals.browser },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  eslintConfigPrettier,
  eslintPluginPrettierRecommended
);
