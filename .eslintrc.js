module.exports = {
  root: true,
  env: {
    browser: true, // 浏览器检查
    es2021: true, // 添加所有 ECMAScript 2021 全局变量并自动将 ecmaVersion 解析器选项设置为 12
    node: true, // node检查
    'vue/setup-compiler-macros': true, // 兼容 defineProps API
  },
  parser: 'vue-eslint-parser',
  extends: [
    'airbnb-base',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'global-require': 'off',
    '@typescript-eslint/no-explicit-any': ['off'], // 允许any类型
    'arrow-parens': 'error', // 箭头函数使用圆括号 ()=>{}
    'vue/multi-word-component-names': 'error', //  要求组件名（文件名）必须是多单词的 例如：HelloWord.vue
    'vue/component-definition-name-casing': ['error', 'PascalCase'], // 强制匹配组件名
    'vue/match-component-import-name': 'error', // 强制匹配组件名
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-absolute-path': 'off',
    'import/no-extraneous-dependencies': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'any',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'no-plusplus': 'error', // 禁用一元操作符 ++ --
    'no-bitwise': 'error', // 禁用按位运算符 & | ^ ~ << >> >>>
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state', 'config'],
      },
    ], // 禁止对函数参数再赋值 state 和 config 参数除外
    // 'linebreak-style': [0, 'error', 'windows'], // 允许windonws开发环境下的代码风格
  },
}
