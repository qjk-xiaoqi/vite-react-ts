import { defineConfig } from 'vite'
// 支持 react 的热更新
import reactRefresh from '@vitejs/plugin-react-refresh'
import macrosPlugin from 'vite-plugin-babel-macros'
// 旧版浏览器兼容插件：自动生成传统版本的 chunk 和其相应 ES 语言特性方面的 polyfill，在不支持原生 ESM 的浏览器中有按需加载。
import legacy from '@vitejs/plugin-legacy'

const path = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  // 开发或生产环境服务的公共基础路径
  base: '/',
  plugins: [
    reactRefresh(),
    macrosPlugin(),
    legacy({
      targets: ['last 2 versions', 'iOS >= 10', 'Android >= 6'],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    hmr: {
      path: '/__vite_hmr',
    },
    open: '/',
    proxy: {
      '/api': {
        target: 'http://yunguan-boe.bytedance.net',
        changeOrigin: true,
      },
      '/motor/api/leads': {
        // target: 'http://10.227.88.137:6789',
        target: 'http://yunguan-boe.bytedance.net',
        changeOrigin: true,
      },
    },
  },
})
