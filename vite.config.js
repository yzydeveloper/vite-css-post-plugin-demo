import path from 'path'
import { defineConfig } from 'vite'
// import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
  base: './',
  plugins: [
    // legacy({
    //   targets: 'IE 11',
    //   modernPolyfills: true
    // })
  ],
  build: {
    cssCodeSplit: true,
    manifest: true,
    rollupOptions: {
      input: {
        "index": path.resolve(__dirname, './index.html'),
        'theme-default': path.resolve(__dirname, './theme-dep/default/index.less'),
        'theme-black': path.resolve(__dirname, './theme-dep/black/index.less'),
        'theme-white': path.resolve(__dirname, './theme-dep/white/index.less')
      },
      output: {
        assetFileNames: 'assets/css/[name].[hash][extname]'
      }
    }
  }
})
