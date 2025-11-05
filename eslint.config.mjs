import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  // Combine Next.js core web vitals and TypeScript configurations
  ...nextVitals,
  ...nextTs,
  {
    // Here you can specify additional configurations or overrides
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020, // Ensure you use the latest ECMAScript
      sourceType: 'module', // Allows for the use of imports
      ecmaFeatures: {
        jsx: true, // Enables the parsing of JSX
      },
    },
    settings: {
      react: {
        version: "detect", // Automatically picks the React version
      },
    },
    rules: {
      // Your custom rules go here
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'react/react-in-jsx-scope': 'off', // Not needed in Next.js
      'react/prop-types': 'off', // Disable prop-types as you are using TypeScript
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/",
    "out/",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
