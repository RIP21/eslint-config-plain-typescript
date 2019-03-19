"use strict";
// The following is copied from `react-scripts/config/paths.js`.
const path = require("path");
const fs = require("fs");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const projectRootPath = resolveApp(".");
const tsConfigPath = resolveApp("tsconfig.json");

module.exports = {
  root: true,
  parser: "babel-eslint",
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true
        },

        // typescript-eslint specific options
        project: tsConfigPath,
        tsconfigRootDir: projectRootPath,
        warnOnUnsupportedTypeScriptVersion: true
      },
      plugins: ["@typescript-eslint"],
      rules: {
        // These ESLint rules are known to cause issues with typescript-eslint
        // See https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended.json
        camelcase: "off",
        indent: "off",
        "no-array-constructor": "off",
        "no-unused-vars": "off"
      }
    }
  ]
};
