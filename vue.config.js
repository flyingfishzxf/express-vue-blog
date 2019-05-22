const path = require('path')
module.exports = {
  // 修改自定义 vue 开发目录，默认为 "src"
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, 'client/')
      }
    }
  },
  outputDir: './server/public',
  indexPath: '../views/index.html',
  // assetsDir: '../public',
  pages: {
    index: 'client/main.js'
  },
  devServer: {
    open: true
  }
}