module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint", "react"],
  extends: [
    "plugin:react/recommended",
    "next/core-web-vitals",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
  ],
  settings: {
    react: {
      pragma: "React",
      version: "999.999.999",
    },
  },
  rules: {
    "no-unused-vars": "off",
    "react/prop-types": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    quotes: [
      "error",
      "double",
      {
        avoidEscape: true,
        allowTemplateLiterals: false,
      },
    ],
  },
};
