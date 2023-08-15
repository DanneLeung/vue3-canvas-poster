import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  assetsInclude: ['**/*.jpg', '**/*.png'],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'example'),
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'package/index.js'),
      name: 'Vue3CanvasPoster',
      fileName: 'vue3-canvas-poster'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
