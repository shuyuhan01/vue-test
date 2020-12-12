let deviceWidth
// eslint-disable-next-line @typescript-eslint/no-use-before-define
setHtmlFontSize()

if (window.addEventListener) {
  window.addEventListener('resize', function () {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    setHtmlFontSize()
  }, false)
}
function setHtmlFontSize() {
  // 1920是设计稿的宽度，当大于1920时采用1920宽度，比例也是除以19.20
  // console.log(document.documentElement.clientWidth)
  deviceWidth = document.documentElement.clientWidth > 1920 ? 1920 : document.documentElement.clientWidth
  document.getElementsByTagName('html')[0].style.cssText = 'font-size:' + deviceWidth / 19.20 + 'px !important'
}