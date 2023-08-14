import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve, join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  assetsInclude: ['**/*.jpg', '**/*.png'],
  resolve: {
    alias: {
      '@': join(__dirname, '/src'),
    }
  },
  build: {
    lib: {
      entry: join(__dirname, 'src/lib/index.js'),
      name: 'Vue3CanvasPoster',
      fileName: 'vue3-canvas-poster'
    },
    rollupOptions: {
      external: [],
      output: {
        exports: 'named',
    //     globals: []
      }
    }
  }
})
