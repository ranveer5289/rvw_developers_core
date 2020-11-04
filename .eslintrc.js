module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:vue/recommended'
    ],
    env: {
        browser: true,
        node: true,
    },
    globals: {
        'process': true
    },
    // Ignore Lint Rules that are Overkill
    rules: {
        'no-arrow-condition': 'off',
        'space-before-blocks': 'off',
        'space-return-throw-case': 'off',
        'vue/attributes-order': 'off',
        'vue/html-indent': 'off',
        'vue/html-closing-bracket-newline': 'off',
        'vue/html-closing-bracket-spacing': 'off',
        'vue/html-self-closing': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/order-in-components': 'off'
    }
}
