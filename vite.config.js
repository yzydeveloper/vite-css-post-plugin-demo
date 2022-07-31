const path = require('path')
// const legacy = require('@vitejs/plugin-legacy').default

module.exports = {
  base: './',
  plugins:[
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
        'theme-default':path.resolve(__dirname, './theme-dep/default/index.less'),
        'theme-black':path.resolve(__dirname, './theme-dep/black/index.less'),
        'theme-white':path.resolve(__dirname, './theme-dep/white/index.less')
      },
      output:{
        assetFileNames: `assets/css/[name].[hash][extname]`,
      }
    }
  }
}
