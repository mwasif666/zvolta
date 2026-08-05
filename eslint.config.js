import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

export default [
  {
    ignores: [
      "dist/**",
      "node_modules/**",
      "public/**",
      "src/generated/**",
      "src/data/pages/blogs/notionBlogPosts.generated.js",
    ],
  },
  {
    files: ["**/*.{js,jsx,mjs,cjs}"],
    ...js.configs.recommended,
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: {
      ...reactHooks.configs.flat.recommended.rules,
      // The converted legacy page layer still contains dormant marketing
      // variants. Keep correctness rules strict while that content is migrated
      // section-by-section into the feature folders.
      "no-unused-vars": "off",
      "react-hooks/exhaustive-deps": "off",
      "react-hooks/set-state-in-effect": "off",
    },
  },
];
