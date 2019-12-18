module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    // 自动按需引入 Vant 组件
    ['import', { libraryName: 'vant', libraryDirectory: 'es', style: true }, 'vant'],
    ['component', { libraryName: 'element-ui', styleLibraryName: 'theme-chalk' }]
  ]
}
