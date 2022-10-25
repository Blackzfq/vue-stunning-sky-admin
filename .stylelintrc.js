module.exports = {
  plugins: ['stylelint-prettier'],
  customSyntax: 'postcss-html',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
    'stylelint-prettier/recommended',
    'stylelint-config-recommended-vue',
  ],
  overrides: [
    {
        files: ['**/*.{scss,css,sass,less}'], // css 相关文件由 postcss-scss 处理
        customSyntax: 'postcss-less'
    },
  ],
  rules: {
    'prettier/prettier': true,
  },
}
