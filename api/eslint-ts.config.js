module.exports = {
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser.
    extends: [
        "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin.
        "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from the @typescript-eslint/eslint-plugin that would otherwise conflict with Prettier.
        "plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays Prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features.
        sourceType: "module", // Allows for the use of imports.
    },
    rules: {
        "sort-imports": "error",
        "@typescript-eslint/explicit-member-accessibility": ["error", {accessibility: "no-public"}],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/interface-name-prefix": "off",
    },
};
