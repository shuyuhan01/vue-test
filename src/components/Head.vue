<template>
  <nav class="headbg" :class="astyle === '' ? 'home' : astyle">
    <div class="headS">
      <img src="@/assets/img/logo.png" alt="logo" class="favicon" />
      <ul class="sameUrl">
        <li
          v-for="(item, index) in count"
          :key="index + item.path"
          :class="index === active ? 'active' : item.path === amit ? 'acr' : ''"
          @click="add(index, item.path)"
        >
          <router-link :to="item.path" class="channel">
            <span>{{ item.name }}</span></router-link
          >
        </li>
      </ul>
    </div>
    <img
      src="@/assets/img/partner/an.png"
      alt="立即申请"
      class="send"
      v-if="astyle === 'partner'"
      @click="send"
    />
  </nav>
</template>

<script lang="ts">
import { ref } from "vue"
import store from "@/store"
import { useStore } from "vuex"
const useLetterLogic = () => {
  const letter = ref("测试")
  return { letter }
}
export default {
  setup(props, context) {
    console.log(props, context)
    console.log(useStore().state)
    const { letter } = useLetterLogic()
    console.log(letter.value)
    const count = ref([
      { name: "首页", path: "/" },
      { name: "合伙人招募", path: "/partner" },
      { name: "合伙人运营与服务", path: "/operation" },
      { name: "公司介绍", path: "/about" },
      { name: "媒体报道", path: "/media" },
    ])

    const active = ref()
    const amit = ref()
    const astyle = ref()
    // const numT = ctxt["ctx"].$router.currentRoute.value.name
    const numT = store.state.router
    // 跳转的路由
    console.log(numT)
    astyle.value = numT.split("/")[1]
    amit.value = numT
    const add = (index: any, item: any) => {
      active.value = index
      amit.value = item
      astyle.value = item.split("/")[1]
    }
    const send = () => {
      store.dispatch("setTest", "down")
    }
    return {
      count,
      active,
      add,
      amit,
      send,
      astyle,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.headbg {
  // background-size: 100% 100%;
  &.home {
    height: 10rem;
    background: url(../assets/img/index/banner.png) no-repeat center;
    background-size: 100% 100%;
  }
  &.partner {
    height: 10rem;
    background: url(../assets/img/partner/bannert.png) no-repeat center;
    background-size: 100% 100%;
    position: relative;
    .send {
      width: 3.63rem;
      height: 1.63rem;
      position: absolute;
      bottom: 1.75rem;
      left: 3.25rem;
      cursor: pointer;
    }
  }
  &.operation {
    height: 8rem;
    background: url(../assets/img/operation/banner.png) no-repeat center;
    background-size: 100% 100%;
  }
  &.about {
    height: 10rem;
    background: url(../assets/img/about/banner.png) no-repeat center;
    background-size: 100% 100%;
  }
  &.media {
    height: 6rem;
    background: url(../assets/img/media/banner.png) no-repeat center;
    background-size: 100% 100%;
  }
  .headS {
    display: flex;
    max-width: 12rem /* 1200/100 */;
    align-items: center;
    margin: 0 auto;
    font-size: 0.18rem /* 18/100 */;
    padding-top: 0.4rem /* 40/100 */;
    position: relative;
    .sameUrl {
      display: flex;
      margin: 0;
      padding-left: 3.08rem /* 308/100 */;
      width: 100%;
      justify-content: space-between;
      li {
        height: 100%;
        color: #fff;
      }
      // .channel{
      //   position: relative;
      // }
      .channel:hover:after {
        width: 0.3rem;
      }
      .channel:hover span {
        color: rgba(247, 181, 0, 1);
      }
      .channel:after {
        content: "";
        // position: absolute;
        display: block;
        margin: 0 auto;
        width: 0;
        margin-top: .02rem;
        height: 0.04rem;
        -webkit-transition: width 0.3s ease-in-out;
        -o-transition: width 0.3s ease-in-out;
        transition: width 0.3s ease-in-out;
        background: #fdd000;
      }
      .active > .channel:after,
      .acr > .channel:after {
        width: 0.3rem;
      }
      .active,
      .acr > .channel span {
        color: rgba(247, 181, 0, 1);
      }
    }
    // .headR {
    //   display: flex;
    //   margin: 0;
    //   padding-left: 3.08rem /* 308/100 */;
    //   width: 100%;
    //   justify-content: space-between;
    //   li {
    //     height: 100%;
    //     color: #fff;
    //   }
    //   .line {
    //     width: 0.3rem /* 30/100 */;
    //     height: 0.04rem /* 4/100 */;
    //     background: rgba(247, 181, 0, 1);
    //     border-radius: 0.02rem /* 2/100 */;
    //     margin-top: 0.09rem /* 9/100 */;
    //     -webkit-border-radius: 0.02rem /* 2/100 */;
    //     -moz-border-radius: 0.02rem /* 2/100 */;
    //     -ms-border-radius: 0.02rem /* 2/100 */;
    //     -o-border-radius: 0.02rem /* 2/100 */;
    //   }
    //   .active,
    //   .acr {
    //     display: flex;
    //     flex-direction: column;
    //     align-items: center;
    //     height: 100%;
    //   }

    //   .active,
    //   .acr > a {
    //     color: rgba(247, 181, 0, 1) !important;
    //   }
    // }
    .favicon {
      width: 2.01rem /* 201/100 */;
      height: 0.55rem /* 55/100 */;
    }
  }
}
</style>
