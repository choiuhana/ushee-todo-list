module.exports = {
    root: true,
    extends: ["plugin:@typescript-eslint/eslint-recommended", "plugin:@typescript-eslint/recommended"],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            rules: {
                "@typescript-eslint/no-shadow": ["error"],
                "no-shadow": "off",
                "no-undef": "off",
                "@typescript-eslint/explicit-function-return-type": "off",
                "@typescript-eslint/no-empty-interface": "off",
            },
        },
    ],
};
