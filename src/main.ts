import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
// import BaiduMap from "vue-baidu-map"
import "@/assets/styles/app.scss"
import "swiper/swiper-bundle.css"
import "@/utils/flex.js"
// createApp(App).use(BaiduMap, {
//   /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
//   ak: "4IU3oIAMpZhfWZsMu7xzqBBAf6vMHcoa",
// })
createApp(App)
  .use(store)
  .use(router)
  .mount("#app")
