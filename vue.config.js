
module.exports = {
  publicPath: '/',
  outputDir: 'gw',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  runtimeCompiler: true,
  devServer: {	  // 开发调试服务器配置项
    open: true,  // npm run serve后自动打开页面
    host: '0.0.0.0',  // 匹配本机IP地址
    port: 9009,  // 开发服务器运行端口号
    compress: true,  // 启用静态资源压缩算法
    // proxy: {
    //   '/api': {
    //     target: '', // 代理目标的基础路径
    //     changeOrigin: true,
    //     ws: true,
    //     pathRewrite: {// 重写路径: 去掉路径中开头的'/api'
    //       '^/api': ''
    //     }
    //   }
    // }
  },
  configureWebpack: {
    externals: {
      'BMap': "BMap"
    }
  }
}