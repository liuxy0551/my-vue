var path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  productionSourceMap: false, // 生产环境的 source map
  devServer: {
    disableHostCheck: true,//解决127.0.0.1指向其他域名时出现"Invalid Host header"问题
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/my-vue/' : '/',
  outputDir: 'docs',
  chainWebpack: config => {
    if (process.env.use_analyzer) {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
  }
}
