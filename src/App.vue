<template>
  <Head />
  <router-view v-if="isRouterAlive" />
  <Footer />
  <Up />
</template>
<script lang="ts">
// import { Options, Vue} from "vue-class-component"
import { provide, nextTick, ref } from "vue"
import Head from "@/components/Head.vue"
import Footer from "@/components/Footer.vue"
import Up from "@/components/up.vue"
// @Options({
// })

export default {
  name: "App",
  components: {
    Head,
    Footer,
    Up,
  },

  // provide() {
  //   return {
  //     // reload: this.reload(),
  //   }
  // },
  // isRouterAlive = true
  // reload() {
  //   this.isRouterAlive = false
  //   this.$nextTick(function() {
  //     setTimeout(()=>{
  //       this.isRouterAlive = true
  //     }, 100)
  //   })
  // }
  // emits: {
  //   showSYCM: (val) => {
  //     console.log(val + "123")
  //     return true
  //   },
  // },
  setup() {
    // console.log(getCurrentInstance())
    const isRouterAlive = ref<boolean>(true)
    const themeRef = () => {
      isRouterAlive.value = false
      nextTick(function() {
        isRouterAlive.value = true
      })
    }
    // 测试
    provide("customVal", "组件传递的值"); 
    // eslint-disable-next-line no-undef
    provide("reload", themeRef)
    return {
      isRouterAlive
    }
  },
}
</script>
<style lang="scss"></style>
