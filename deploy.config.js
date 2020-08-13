/*
 * 自动化部署 deploy vue project
 * https://github.com/liuxy0551/deployvue#readme
 */

module.exports = {
  default: {
    deployTo: '/mnt/projects/my-vue', // 部署到服务器的路径
    keepReleases: 5, // 支持回退几次版本
    archive: {
      rootDir: 'dist', // 打包后的文件夹名，默认dist
      only: ['*'] // 备用参数
    },
    shared: { // 备用参数
      dirs: ['node_modules'],
      files: []
    },
    cleanRange: '*' // 删除打包后临时文件的范围，默认值为 '*'，可选值为 '*' 和 '-*'，前者删除 rootDir 开头的压缩包和打包文件夹，后者删除打包的压缩包
  },
  // 测试环境
  staging: {
    // 需要部署的服务器列表
    servers: [
      {
        host: '47.99.64.142',
        username: 'deploy'
      }
    ],
    branch: 'develop', // 分支名
    installCommands: [], // 安装依赖命令集，默认为 []
    buildCommands: ['npm run build:staging'] // 打包命令集，默认为 ['npm run build']
  },
  // 正式环境
  production: {
    // 需要部署的服务器列表
    servers: [
      {
        host: '47.99.64.142',
        username: 'deploy'
      }
    ],
    branch: 'master', // 分支名
    installCommands: [], // 安装依赖命令集，默认为 []
    buildCommands: ['npm run build'] // 打包命令集，默认为 ['npm run build']
  }
}
