module.exports = {
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        "eslint-config-jsdoc",
        "plugin:jsdoc/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "./tsconfig.json",
        "ecmaVersion": 2019
    },
    "plugins": [
        "@typescript-eslint",
        "jsdoc",
        "import",
        "eslint-comments",
        "eslint-plugin"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/ban-ts-ignore": "error",
        "@typescript-eslint/ban-types": "error",
        "@typescript-eslint/camelcase": "error",
        "@typescript-eslint/class-name-casing": "error",
        "@typescript-eslint/brace-style": "error",
        "@typescript-eslint/consistent-type-assertions": "error",
        "@typescript-eslint/explicit-function-return-type": "error",
        "@typescript-eslint/explicit-member-accessibility": "error",
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-use-before-define": "error",
        "@typescript-eslint/require-await": "error",
        "@typescript-eslint/return-await": "error",
        "@typescript-eslint/space-before-function-paren": "error",
        "padding-line-between-statements": ["error",
            { blankLine: "any", prev: "*", next: "*" },
            { blankLine: "always", prev: "*", next: ["return"] },
            { blankLine: "always", prev: "directive", next: "*" },
            { blankLine: "always", prev: "directive", next: "*" },

            { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
            { blankLine: "never", prev: ["const", "let", "var"], next: ["const", "let", "var"] },
            { blankLine: "always", prev: "export", next: ["const", "let", "var", "function"] }
        ],
    }
};
