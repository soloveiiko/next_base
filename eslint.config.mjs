import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  {
    ignores: [
      ".next/",
      ".husky/",
      "node_modules/",
      "coverage/",
      "package-lock.json",
      ".prettierignore",
      "*.log",
    ],
  },
  ...compat.config({
    extends: [
      "next",
      "plugin:tailwindcss/recommended",
      "plugin:prettier/recommended",
    ],
    rules: {},
  }),
];

export default eslintConfig;
