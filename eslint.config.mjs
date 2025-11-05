// eslint.config.mjs

import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  // Combine Next.js core web vitals and TypeScript configurations
  ...nextVitals,
  ...nextTs,
  {
    // Additional configurations or overrides
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020, // Specify ECMAScript version
      sourceType: 'module', // Allows for the use of imports
      ecmaFeatures: {
        jsx: true, // Enables JSX parsing
      },
    },
    settings: {
      react: {
        version: "detect", // Automatically detect React version
      },
    },
    rules: {
      // Your custom rules here
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'react/react-in-jsx-scope': 'off', // Not needed in Next.js
      'react/prop-types': 'off', // Disable prop-types since you are using TypeScript
      'prettier/prettier': 'error', // Enable Prettier errors as ESLint errors
    },
    overrides: [
      {
        files: ['/*.ts', '/*.tsx'], // Apply specific rules to TypeScript files
        rules: {
          // TypeScript-specific rules can go here
        },
      },
    ],
  },
  // Override default ignores of eslint-config-next
  globalIgnores([
    ".next/",
    "out/",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
