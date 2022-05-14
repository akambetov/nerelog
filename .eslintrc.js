const path = require('path')

module.exports = {
    env: {
        es6: true,
        node: true,
        browser: true
    },
    parserOptions: {
        sourceType: 'module'
    },
    extends: ['airbnb', 'airbnb/hooks'],
    settings: {
        'import/resolver': {
            node: {
                paths: [path.resolve(__dirname, 'src')],
                extensions: ['.js', '.jsx', '.json']
            }
        }
    },
    rules: {
        indent: 'off',
        'react/jsx-indent': 'off',
        semi: 'off',
        'comma-dangle': 'off',
        'import/prefer-default-export': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/function-component-definition': 'off',
        'object-curly-newline': 'off',
        'react/forbid-prop-types': 'off',
        'padding-line-between-statements': [
            'warn',
            { blankLine: 'always', prev: '*', next: ['return', 'if', 'export', 'try'] }
        ]
    }
}
