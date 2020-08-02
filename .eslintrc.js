module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: ['eslint:recommended'],
  rules: {
    // 'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-func-assign': 0,
    'no-unsafe-finally': 0
  },
  globals: {
    // $nuxt: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
};
