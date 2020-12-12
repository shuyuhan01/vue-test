<template>
  <div class="Comp">
    <div class="CompM">
      <p class="mtitle townW">公司简介</p>
      <div class="mline townL"></div>
    </div>
    <div class="intro">
      <div class="left">
        <p>
          惠通控股，致力于打造物流服务与生活消费的一站式到家全生态服务 平台。
        </p>
        <div class="line"></div>
        <div class="con">
          惠通控股集团下属玖点灵、智联惠通、百事亨通3家公司，玖点灵主要运营“物拉拉”
          平台，包括城市配送、终端服务网点建设、社区团长招募、供应链打造等。百事亨
          通致力于建设全国快递服务网点。智联惠通负责城市干线的物流运营。通过干线物
          流、快递及城市配送，赋能新零售，打造物流网络和生活服务平台。
        </div>
      </div>
      <img src="@/assets/img/index/huit.png" alt="公司前台" class="right" />
    </div>
  </div>
  <div class="advanTage">
    <p class="mtitle townW">平台优势</p>
    <div class="mline townL"></div>
  </div>
  <div class="mid">
    <div class="one">
      <img src="@/assets/img/index/1-b.png" alt="创新F2B2b2c 商业模式" />
      <div class="title">创新F2B2b2c<br />商业模式</div>
      <div class="sameH">
        从源头到门店，实现物<br />
        流、销售、生活服务<br />
        “一站式”F2c的物流服<br />
        务模式。
      </div>
    </div>
    <div class="one">
      <img src="@/assets/img/index/2-b.png" alt="创新F2B2b2c 商业模式" />
      <div class="title">直达品牌方的<br />优质供应链</div>
      <div class="sameH">
        惠通和国内一线生鲜、百<br />
        货品牌方均达成了供应链<br />
        合作。
      </div>
    </div>
    <div class="one">
      <img src="@/assets/img/index/3-b.png" alt="创新F2B2b2c 商业模式" />
      <div class="title">覆盖全国去中心化<br />的组货网络</div>
      <div class="sameH">
        工业品下乡，农产品进城<br />
        每个社区站点，即是卖货<br />
        点又是供货点
      </div>
    </div>
    <div class="one">
      <img src="@/assets/img/index/4-b.png" alt="创新F2B2b2c 商业模式" />
      <div class="title">
        快递点+实体店<br />
        混业经营
      </div>
      <div class="sameH">
        惠通快递网点，一方面增<br />
        加收入；另一方面成倍增<br />
        加进店客流
      </div>
    </div>
    <div class="one">
      <img src="@/assets/img/index/5-b.png" alt="创新F2B2b2c 商业模式" />
      <div class="title">
        惠通商学院
      </div>
      <div class="sameL">
        赋能实体建立人才体系
      </div>
    </div>
  </div>
  <div class="custom">
    <div class="customT">
      <p class="mtitle townW">客户案例</p>
      <div class="mline townL"></div>
    </div>
    <div class="swiper-container syproSwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in lArr" :key="item.id">
          <a href="javascript:;" class="abox">
            <div class="imgbox">
              <span class="padding_img"><img :src="item.path"/></span>
            </div>
            <div class="aboxWord">{{ item.content }}</div>
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- 视频 -->
  <div class="video">
    <video :src="inputValue" ref="video" @click="hit"></video>
    <img
      src="@/assets/img/index/bofang.png"
      alt="播放"
      class="bo"
      @click="bo"
      v-show="showV"
    />
    <img src="@/assets/img/index/bot.png" alt="阴影底部" class="bg" />
  </div>
  <div style="text-align: center;color: #07222F;padding-bottom: 1.2rem;">
    点击观看视频了解我们
  </div>
</template>

<script lang="ts">
// import { Options, Vue } from "vue-class-component"
// import Head from '@/components/Head.vue'; // @ is an alias to /src
// console.log(getCurrentInstance())
// @Options({
//   components: {
//     // Head,
//   },
// })
import { onMounted, ref, nextTick } from "vue"
import { customerCase, teamVideos } from "@/api/api"
import Swiper from "swiper"

export default {
  setup() {
    const lArr = ref([])
    const inputValue = ref()
    const showV = ref(true)
    const video = ref(null)
    // const onRefresh = inject<Function>('reload')

    // const customVal = inject("customVal");
    // console.log(customVal)
    onMounted(async () => {
      const par = {
        pageSize: 99,
        pageNum: 1,
      }
      const res = await customerCase(par)
      const { list } = res.data.data
      lArr.value = list
      setTimeout(() => {
        new Swiper(".syproSwiper", {
          slidesPerView: 3,
        })
      }, 100)
      // customerCase(par).then((res) => {
      //   const { list } = res.data.data
      //   lArr.value = list
      //   setTimeout(() => {
      //     new Swiper(".syproSwiper", {
      //       slidesPerView: 3,
      //     })
      //   }, 100)
      // })
      teamVideos().then((res) => {
        const { path } = res.data.data
        inputValue.value = path
      })
      video.value.addEventListener(
        "ended",
        function() {
          //结束
          showV.value = true
          video.value.load()
        },
        false
      )
    })
    const bo = () => {
      nextTick(() => {
        video.value.play()
        showV.value = false
      })
    }
    const hit = () => {
      // onRefresh && onRefresh()
      video.value.pause()
      showV.value = true
    }
    return {
      lArr,
      inputValue,
      video,
      bo,
      hit,
      showV,
    }
  },
}
</script>
<style scoped lang="scss">
.Comp {
  padding: 1.2rem 2.81rem 0.95rem 3rem;
  .CompM {
    background: url(../assets/img/index/Comp.png) no-repeat center;
    background-size: 100% 100%;
    max-width: 9.45rem;
    margin: 0 auto;
    position: relative;
    height: 0.55rem;
  }
  .townW {
    left: 3.52rem;
  }
  .townL {
    left: 3.72rem;
  }
  .intro {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    margin-top: 0.97rem;
    .right {
      width: 6.4rem;
      height: 4.5rem;
      margin-left: 0.34rem;
    }
    .left p {
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(7, 34, 47, 1);
    }
    .left .line {
      width: 0.14rem;
      height: 0.02rem;
      background: rgba(51, 51, 51, 1);
      opacity: 0.54;
      border-radius: 0.01rem;
      margin: 0.3rem 0;
    }
    .left .con {
      font-size: 0.18rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      line-height: 0.4rem;
    }
  }
}
.advanTage {
  background: url(../assets/img/index/advantage.png) no-repeat center;
  background-size: 100% 100%;
  max-width: 12.07rem;
  margin: 0 auto;
  position: relative;
  height: 0.55rem;
}

.advanTage .townW {
  left: 4.84rem;
}

.advanTage .townL {
  left: 5.03rem;
}
.mid {
  padding: 0 3rem;
  display: flex;
  align-items: center;
  background-color: #06192d;
  margin-top: 1.22rem;
}

.mid .one {
  width: 2.64rem;
  height: 6rem;
  text-align: center;
}

.mid .one:nth-child(1) {
  background: url(../assets/img/index/1.png) no-repeat center;
  background-size: 100% 100%;
  background-color: #030d19;
}

.mid .one:nth-child(2) {
  background: url(../assets/img/index/2.png) no-repeat center;
  background-size: 100% 100%;
  background-color: #030d19;
}

.mid .one:nth-child(3) {
  background: url(../assets/img/index/3.png) no-repeat center;
  background-size: 100% 100%;
  background-color: #030d19;
}

.mid .one:nth-child(4) {
  background: url(../assets/img/index/4.png) no-repeat center;
  background-size: 100% 100%;
  background-color: #030d19;
}

.mid .one:nth-child(5) {
  background: url(../assets/img/index/5.png) no-repeat center;
  background-size: 100% 100%;
  background-color: #030d19;
}

.mid > .one:hover {
  background: rgba(227, 165, 0, 1);
}

.mid > .one:hover .sameH {
  display: block;
}

.mid > .one:hover .sameL {
  display: block;
}

.mid .one img {
  width: 0.56rem;
  height: 0.57rem;
  margin-top: 1.4rem;
  margin-bottom: 1rem;
}

.mid .one div {
  color: #fff;
}

.mid .one .title {
  font-size: 0.22rem;
  line-height: 0.36rem;
}

.mid .sameH {
  display: none;
  margin-top: 0.29rem;
  font-size: 0.18rem;
  line-height: 0.3rem;
}

.mid .sameL {
  display: none;
  margin-top: 0.65rem;
  font-size: 0.18rem;
  line-height: 0.3rem;
}
.custom {
  background-color: #fafafa;
  padding: 1.2rem 3rem 1rem 3rem;
}

.custom .syproSwiper {
  margin-top: 1.22rem;
}

.custom .abox {
  width: 90%;
  display: block;
  color: #07222f !important;
  font-size: 0.22rem;
  margin: 0 auto;
}
.customT {
  background: url(../assets/img/index/case.png) no-repeat center;
  background-size: 100% 100%;
  max-width: 8.53rem;
  margin: 0 auto;
  position: relative;
  height: 0.55rem;
}

.customT .townW {
  left: 3.07rem;
}

.customT .townL {
  left: 3.27rem;
}
.video {
  padding: 1.2rem 3.6rem 0.7rem 3.6rem;
  position: relative;
  cursor: pointer;
}

.video video {
  width: 100%;
  object-fit: fill;
  height: 6rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 0.1rem;
}

.video .bo {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 1rem;
  height: 1rem;
}

.video .bg {
  width: 13.85rem;
  height: 0.84rem;
  position: absolute;
  left: 2.68rem;
  bottom: 0.28rem;
}
</style>
