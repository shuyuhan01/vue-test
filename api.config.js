const isPro = Object.is(process.env.NODE_ENV, 'production')
 // 打包上线后的环境
module.exports = {
  baseUrl: isPro ? 'https://baidu.com' : 'api/'
}