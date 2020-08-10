module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    quotes: 'off',
    semi: 'off',
    indent: [
      0,
      2
    ],
    'object-shorthand': 'off',
    'operator-linebreak': 'off',
    'no-console': 'off',
    'sort-imports': 'off',
    'import/order': 'off',
    'arrow-parens': 'off',
    'comma-dangle': 'off',
    'no-trailing-spaces': 'off',
    'no-multiple-empty-lines': 'off',
    'object-curly-spacing': 'off',
    'object-curly-newline': 'off',
    'class-methods-use-this': 'off',
    'no-empty-function': 'off',
    'no-param-reassign': 'off',
    'no-unused-expressions': 'off',
    'import/newline-after-import': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off'
  }
}
