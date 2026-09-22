import pluginJs from '@eslint/js';
import eslintPluginPlaywright from 'eslint-plugin-playwright';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  // Ignored files
  { ignores: ['package-lock.json', 'playwright-report/**', 'test-results/**'] },

  // TS files
  { files: ['**/*.ts'] },

  // Environment
  {
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        warnOnUnsupportedTypeScriptVersion: false,
      },
    },
  },

  // Basic rules
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPlaywright.configs['flat/recommended'],
  eslintPluginPrettierRecommended,

  // Project's own rules
  {
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'error',
      'no-console': 'warn',
      'playwright/no-nested-step': 'off',
      'prettier/prettier': 'warn',
    },
    settings: {
      playwright: {
        globalAliases: {
          test: ['setup', 'health'],
        },
      },
    },
  },
];
