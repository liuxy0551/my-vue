var path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  productionSourceMap: false, // 生产环境的 source map
  devServer: {
    disableHostCheck: true,//解决127.0.0.1指向其他域名时出现"Invalid Host header"问题
  },
  outputDir: 'docs',
  publicPath: '/my-vue',
  chainWebpack: config => {
    config.resolve.alias.set('vue$', 'vue/dist/vue.common.js') // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('@', resolve('src'))

    // 打包时自动把所有图片的本地路径改为 CDN 路径
    config
      .module
      .rule("images")
      .test(/\.(jpe?g|png|gif)$/i)
      .use("url-loader")
      .loader("url-loader")
      .options({
        limit: 10000,
        publicPath: process.env.NODE_ENV === 'production' ? 'http://media.liuxianyu.cn/images' : '',
        outputPath: 'img',
        name: '[name].[ext]'
      })
      .end()

    // 优化插件
    if (process.env.use_analyzer) {
      config
        .plugin('webpack-bundle-analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
  },
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        prependData: `@import "@/assets/stylesheets/scss/mixins/variables.scss";`
      },
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 37.5, // 效果图375
            propList: ['*'], // 属性的选择器，*表示通用
            selectorBlackList: ['.px-'], //   忽略的选择器   .ig-  表示 .ig- 开头的都不会转换
          })
        ]
      }
    }
  }
}
