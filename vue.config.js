const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy: {
      '/api': {
          target: 'http://apis.juhe.cn',
          changeOrigin: true,
          pathRewrite: { // pathRewrite 重写路径
              "^/api": ""
          }
      }
  }
    }
})
