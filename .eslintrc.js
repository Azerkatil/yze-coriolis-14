module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:foundry-vtt/recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  globals: {
    // Classes
    Macro: "readonly",

    TextEditor: "readonly",
    // foundry utils
    foundry: "readonly",
    fromUuid: "readonly",
  },
  rules: {},
};
