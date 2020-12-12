import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import Home from "../views/Home.vue"
import store from "@/store"
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "惠通-首页",
    },
  },
  {
    path: "/partner",
    name: "Partner",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Partner.vue"),
    meta: {
      title: "惠通-合伙人招募",
    },
  },
  {
    path: "/operation",
    name: "Operation",
    meta: {
      title: "惠通-合伙人运营与服务",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Operation.vue"),
  },
  {
    path: "/media",
    name: "Media",
    meta: {
      title: "惠通-媒体报告",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Media.vue"),
  },
  {
    path: "/about",
    name: "About",
    meta: {
      title: "惠通-公司介绍",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
]
console.log(createWebHashHistory(process.env.BASE_URL))
const rouTer = createWebHashHistory(process.env.BASE_URL).state.current
store.dispatch('setrouTer',rouTer)
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
router.beforeEach(function(to, from, next) {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
