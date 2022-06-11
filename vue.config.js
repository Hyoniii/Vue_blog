const { defineConfig } = require('@vue/cli-service')

//default가 아닌 설정 항목들이 추가 되는
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],

  outputDir: 'dist',
  publicPath: '/',
  assetsDir: 'static'
})
