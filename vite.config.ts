import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    // vite中跨域的写法
    proxy: {
      '/dev-api': {
        // 跨域的地址
        // target: 'http://serverqn.9yuecloud.com',
        target: 'http://vue.mengxuegu.com/pro-api',
        // 开启跨域
        changeOrigin: true,
        // 路径重写
        rewrite: (path) => path.replace(/^\/dev-api/, '')
      }
    }
  }
})
