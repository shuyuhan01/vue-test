<template>
  <div class="news">
    <div
      class="con"
      v-for="item in arrL"
      :key="item.id"
      @click="hitT(item.link)"
    >
      <div class="left">
        <img :src="item.picture" alt="图片" />
      </div>
      <div class="right">
        <div>{{ item.title }}</div>
        <div>{{ item.source }}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, onMounted, onUnmounted } from "vue"
import { coverage } from "@/api/api"
export default {
  setup() {
    const arrL = ref([
      {
        link: "https://new.qq.com/omn/20200727/20200727A07DPL00.html",
        picture:
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607782717371&di=7ddb345b592cd7ce3567c2bfaf1533f9&imgtype=0&src=http%3A%2F%2Fimg.ewebweb.com%2Fuploads%2F20190403%2F21%2F1554298696-ctPdXnbaVY.jpg",
        source: "腾讯网",
        title: "浙江社区：“惠通＋淘逛”一站式到家生态服务平台即将起航",
      },
    ])
    const pageNum = ref(1)
    const pageSize = ref(10)
    const toTal = ref(0)
    const add = () => {
      const par = {
        pageNum: pageNum.value,
        pageSize: pageSize.value,
      }
      coverage(par).then((res) => {
        const costl = res.data
        if (costl["code"] === 200) {
          arrL.value = [...arrL.value, ...costl["data"].list]
          toTal.value = Number(costl["data"].total)
        }
      })
    }
    const hitT = (url) => {
      window.open(url)
    }
    const handleScroll = () => {
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      //变量windowHeight是可视区的高度
      const windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight
      //变量scrollHeight是滚动条的总高度
      const scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight
      // console.log(scrollTop)
      // console.log(windowHeight)
      // console.log(scrollHeight)
      //滚动条到底部的条件
      if (scrollTop + windowHeight === scrollHeight) {
        if (toTal.value > arrL.value.length) {
          pageNum.value++
          add()
        }
      }
    }
    onMounted(() => {
      window.addEventListener("scroll", handleScroll, true)
      add()
    })
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll)
    })
    return {
      arrL,
      pageNum,
      pageSize,
      toTal,
      hitT,
    }
  },
}
</script>
<style scoped lang="scss">
.news {
  max-width: 16.2rem;
  margin: 0 auto;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.con:nth-child(1) {
  margin-top: -2.3rem;
}

.con {
  background: rgba(250, 250, 250, 1);
  border-radius: 0.1rem;
  height: 4rem;
  margin-bottom: 0.4rem;
  display: flex;
  cursor: pointer;
}

.con .left {
  width: 6rem;
  height: 100%;
}

.con .left img {
  width: 100%;
  height: 100%;
  border-top-left-radius: 0.1rem;
  border-bottom-left-radius: 0.1rem;
}

.con .right {
  width: 10.2rem;
  height: 100%;
}

.con .right div:nth-child(1) {
  font-size: 0.4rem;
  font-family: PingFang SC;
  font-weight: 400;
  color: rgba(7, 34, 47, 1);
  margin-top: 0.8rem;
  margin-bottom: 1.15rem;
  margin-left: 0.8rem;
}

.con .right div:nth-child(2) {
  font-family: PingFang SC;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  margin-left: 0.6rem;
}
</style>
