/** @type {import('tailwindcss').Config} */
// const plugin = require('tailwindcss/plugin')
/**
 * 配置说明：
 * 1. content：指定应用tailwindcss的文件模板
 * 2. theme：主题配置新增了zIndex的一个层级关系，重置了断点尺寸，新增primary配色
 * 3. plugins 自定义动画插件
 */
module.exports = {
  content: ['./index.html', './src/**/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
      },
      colors: {
        primary: '#0960bd',
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1590px',
      },
    },
  },
  plugins: [require('./src/design/Tailwind/plugins')],
}
