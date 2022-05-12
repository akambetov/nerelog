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
        semi: ['error', 'never'],
        'comma-dangle': ['error', 'never'],
        'react/function-component-definition': [
            'error',
            {
                namedComponents: ['arrow-function'],
                unnamedComponents: ['arrow-function']
            }
        ],
        'import/prefer-default-export': 'off',
        'padding-line-between-statements': [
            'warn',
            { blankLine: 'always', prev: '*', next: ['return', 'if', 'export', 'try'] }
        ],
        indent: ['warn', 4],
        'react/jsx-indent': ['warn', 4]
    }
}
