const path = require('path')
const resolve = (dir) => {
  return path.join(__dirname, dir)
}
console.log(process.env.BASE_URL)
module.exports = {
  publicPath: process.env.BASE_URL,
  // lintOnSave: true,
  configureWebpack: {
    devtool: 'source-map',
  },
  transpileDependencies: ['single-spa', 'qiankun', 'import-html-entry'],
  chainWebpack: (config) => {
    config.plugins.delete('prefetch')
    config.resolve.alias.set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
  },

  css: {
    loaderOptions: {
      //   less: {
      //     javascriptEnabled: true,
      //     data: `@import "~@/index.less";`,
      //   },
    },
  },
  productionSourceMap: false,
  pluginOptions: {
    // "style-resources-loader": {
    //   preProcessor: "less",
    //   patterns: [path.resolve(__dirname, "./src/index.less")],
    // },
  },
}
