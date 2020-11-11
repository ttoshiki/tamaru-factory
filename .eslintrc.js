module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['standard', 'plugin:vue/essential', '@vue/prettier'],
  rules: {
    camelcase: 0,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        printWidth: 100
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
