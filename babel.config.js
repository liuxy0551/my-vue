module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  // 自动按需引入 Vant 组件
  plugins: [
    ['import', { libraryName: 'vant', libraryDirectory: 'es', style: true }, 'vant']
  ]
}
