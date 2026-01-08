import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default defineConfig([
    js.configs.recommended,
    ...tseslint.configs.recommended,
    eslintConfigPrettier,
    {
        files: ['**/*.ts', '**/*.js'],
        plugins: {
            prettier: eslintPluginPrettier,
        },
        rules: {
            'prettier/prettier': 'error',
            'prefer-const': 'error',
            'object-shorthand': 'warn',
        },
    },
]);