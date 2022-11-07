import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// 重新指定解析路径 需要安装@types/node环境
import { resolve } from 'path'

// eslint启动时校验
import viteEslint from 'vite-plugin-eslint'

import viteStylelint from '@amatlash/vite-plugin-stylelint'

// 按需引入方法
import AutoImport from 'unplugin-auto-import/vite'

// 按需注册组件
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// 引入mockjs
import { viteMockServe } from 'vite-plugin-mock'

// 重定向路径指向
const pathResolve = (dir: string) => resolve(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [
      vue(),

      vueJsx(),

      viteEslint({
        include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue'],
        exclude: ['./node_modules/**'],
        cache: false,
      }),

      viteStylelint({
        exclude: /node_modules/,
      }),

      viteMockServe({
        supportTs: true, // 允许读取ts文件
        logger: false, // 禁止在控制台显示请求日志
        localEnabled: true, // 开发环境启用mock功能
        prodEnabled: false, // 生产环境禁用mock功能
        mockPath: './mock', // mock文件的路径
        watchFiles: true, // 监视文件夹中的文件更改。 并实时同步到请求结果
      }),

      AutoImport({
        resolvers: [AntDesignVueResolver()],
      }),

      Components({
        dirs: ['src/components'],
        resolvers: [AntDesignVueResolver()],
      }),
    ],

    // 设置公共基础路径
    base: './',

    // 快捷路径配置
    resolve: {
      alias: {
        '@': pathResolve('./src'), // 设置 `@` 指向 `src` 目录
        '@views': pathResolve('./src/views'), // 设置 `views` 指向 `./src/views` 目录 下同
        '@components': pathResolve('./src/components'),
        '@assets': pathResolve('./src/assets'),
        '@router': pathResolve('./src/router'),
        '@stores': pathResolve('./src/stores'),
        '@typings': pathResolve('./src/typings'),
        '@utils': pathResolve('./src/utils'),
      },
    },

    // 开发环境配置
    server: {
      // host: '0.0.0.0',
      port: 8080, // 设置服务启动端口号，如果端口已经被使用，Vite 会自动尝试下一个可用的端口
      open: true, // boolean | string 设置服务启动时是否自动打开浏览器，当此值为字符串时，会被用作 URL 的路径名
      cors: true, // 为开发服务器配置 CORS，配置为允许跨域

      // 设置代理，根据我们项目实际情况配置
      // proxy: {
      //   '/api': {
      //     target: 'http://localhost:8000', // 后台服务地址
      //     changeOrigin: true, // 是否允许不同源
      //     secure: false, // 是否https接口
      //     // ws: true, // 是否代理websockets
      //     // rewrite: path => path.replace(/^\/api/, '') // 路径重写，本项目不需要重写
      //   },
      // },
    },

    build: {
      minify: 'terser',
      outDir: env.VITE_APP_OUT_PUT_DIR,
      assetsDir: 'assets', // 指定静态资源存放路径
      sourcemap: false, // 是否构建source map 文件
      terserOptions: {
        compress: {
          //  对js进行一定的压缩，减少打包文件体积。
          keep_infinity: true, // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
          drop_console: true, // 生产环境去除 console
          drop_debugger: true, // 生产环境去除 debugger
        },
      },
      chunkSizeWarningLimit: 1500, // 默认为500，当打包后单个 chunk 体积超过500就会有警告，在实际项目中太小了，我们这里调整为1500
    },

    // 引入第三方的配置
    optimizeDeps: {
      include: [],
    },
  }
})
