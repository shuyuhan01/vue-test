<template>
  <a href="javascript:;" id="return_top" v-if="show" @click="up()">
    <img src="@/assets/img/up.png" alt="up" />
  </a>
</template>

<script lang="ts">
import { ref, onMounted, onUnmounted } from "vue"
export default {
  setup() {
    const clientHeight = document.documentElement.clientHeight
    const show = ref(false)
    const isTop = ref(true)
    const timer = ref()
    const handleScroll = () => {
      //获取滚动条的滚动高度
      const osTop =
        document.documentElement.scrollTop || document.body.scrollTop
      if (osTop >= clientHeight) {
        //如果滚动高度大于可视区域高度，则显示回到顶部按钮
        show.value = true
      } else {
        //否则隐藏
        show.value = false
      }
      //主要用于判断当 点击回到顶部按钮后 滚动条在回滚过程中，若手动滚动滚动条，则清除定时器
      if (!isTop.value) {
        clearInterval(timer.value)
      }
      isTop.value = false
    }
    onMounted(() => {
      window.addEventListener("scroll", handleScroll, true)
    })
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll)
    })
    const up = () => {
      //设置一个定时器
      timer.value = setInterval(function() {
        //获取滚动条的滚动高度
        const osTop =
          document.documentElement.scrollTop || document.body.scrollTop
        //用于设置速度差，产生缓动的效果
        const speed = Math.floor(-osTop / 6)
        document.documentElement.scrollTop = document.body.scrollTop =
          osTop + speed
        isTop.value = true //用于阻止滚动事件清除定时器
        if (osTop == 0) {
          clearInterval(timer.value)
        }
      }, 30)
    }
    return {
      show,
      up,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#return_top {
  width: 1.43rem;
  height: 1.43rem;
  position: fixed;
  right: 0.1rem;
  bottom: 0.1rem;
}
#return_top img {
  width: 100%;
  height: 100%;
}
</style>
