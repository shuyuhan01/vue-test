<template>
  <!-- 城市合伙人权益 -->
  <div class="middleT">
    <p class="mtitle townW">城市合伙人权益</p>
    <div class="mline townL"></div>
  </div>
  <div class="townA">
    <div class="same">
      <img src="@/assets/img/partner/one.png" alt="直接收益" />
      <div class="mid">直接收益</div>
      <div>会员线上消费持续受益</div>
    </div>
    <div class="same">
      <img src="@/assets/img/partner/two.png" alt="短期收益" />
      <div class="mid">短期收益</div>
      <div>
        招商收益<br />
        总部给予的高额奖励
      </div>
    </div>
    <div class="same">
      <img src="@/assets/img/partner/three.png" alt="中长期收益" />
      <div class="mid">中长期收益</div>
      <div>
        快递收益<br />
        广告收益<br />
        优秀城市代理商共享上市<br />
        红利，实现财富百倍千倍<br />
        增长
      </div>
    </div>
  </div>
  <!-- 汇通 -->
  <div class="huiWrap" style="margin-top: 1.2rem;">
    <div class="huiBg">
      <p class="huiT mtitle">惠通为城市合伙人提供8大支持</p>
      <div class="huiL mline"></div>
    </div>
    <div class="huiCon">
      <div class="same">
        <img src="@/assets/img/partner/1.png" alt="运营支持" />
        <div>运营支持</div>
        <div>总部专业团队多对一扶持</div>
      </div>
      <div class="same">
        <img src="@/assets/img/partner/2.png" alt="奖励支持" />
        <div>奖励支持</div>
        <div>
          对于能够完成目标的，总部<br />
          给予资金、资源、人力支持
        </div>
      </div>
      <div class="same">
        <img src="@/assets/img/partner/3.png" alt="培训支持" />
        <div>培训支持</div>
        <div>
          每周都会为代理商提供<br />
          在线培训课程
        </div>
      </div>
      <div class="same">
        <img src="@/assets/img/partner/4.png" alt="技术支持" />
        <div>技术支持</div>
        <div>
          总部强大技术团队支持
        </div>
      </div>
      <div class="same">
        <img src="@/assets/img/partner/5.png" alt="产品支持" />
        <div>产品支持</div>
        <div>完善产品矩阵支持</div>
      </div>
      <div class="same">
        <img src="@/assets/img/partner/6.png" alt="物料支持" />
        <div>物料支持</div>
        <div>
          三折页、工装、工牌、海报、<br />
          桌贴、门头等
        </div>
      </div>
      <div class="same">
        <img src="@/assets/img/partner/7.png" alt="招商会支持" />
        <div>招商会支持</div>
        <div>
          招商会方案、资金、人才支持
        </div>
      </div>
      <div class="same">
        <img src="@/assets/img/partner/8.png" alt="金融支持" />
        <div>金融支持</div>
        <div>
          对于有团队，缺少资金的合<br />
          伙人，总部提供金融解决方<br />
          案
        </div>
      </div>
    </div>
  </div>
  <div class="townY">
    <p class="mtitle townT">如何成为城市合伙人</p>
    <div class="mline townB"></div>
  </div>
  <div class="sybase">
    <div class="syAll">
      <div class="phone">
        <img src="@/assets/img/partner/phone.png" alt="1.报名咨询" />
        <div class="same">
          <div>1.报名咨询</div>
          <div>电话沟通<br />确定参会意向</div>
        </div>
      </div>
      <div class="company">
        <img src="@/assets/img/partner/company.png" alt="2.现场参会" />
        <div class="same">
          <div>2.现场参会</div>
          <div>
            会议现场<br />
            深度了解项目
          </div>
        </div>
      </div>
      <div class="trust">
        <img src="@/assets/img/partner/trust.png" alt="3.合作签约" />
        <div class="same">
          <div>3.合作签约</div>
          <div>
            成功授权<br />
            城市代理商
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <a name="d3"></a> -->
  <div class="huiWrap" @click="hideW" ref="huiWrap">
    <div class="cityP huiBg">
      <div class="cityT mtitle">登记成为城市合伙人</div>
      <div class="cityN">留下您的信息，专属VIP商务人员与您洽谈沟通</div>
      <div class="cityL"></div>
    </div>
    <div class="inputAll">
      个人信息
      <div class="inputCon">
        <div class="nameAll">
          <div class="name">
            <span style="color:#E60000;margin-right: .1rem;">*</span>姓名
          </div>
          <span class="line"></span>
          <input type="text" class="inputO" v-model="name" />
        </div>
        <div class="nameAll">
          <div class="name">
            <span style="color:#E60000;margin-right: .1rem;">*</span>联系方式
          </div>
          <span class="line"></span>
          <input
            type="text"
            class="inputT"
            v-model="contact"
            oninput="value=value.replace(/^\.+|[^\d.]/g,'')"
            maxlength="11"
            @blur="checkPhone($event)"
          />
        </div>
      </div>
      意向区域
      <div class="inputCity">
        <div class="nameCity" @click.stop="level">
          <input
            type="text"
            class="inputO"
            placeholder="选择省份"
            disabled="true"
            v-model="provinceId.name"
          />
          <img
            src="@/assets/img/partner/fangxiang.png"
            alt="下拉"
            v-if="city.length === 0"
          />
          <img src="@/assets/img/partner/fangs.png" alt="下拉" v-else />
        </div>
        <div class="nameCity" @click.stop="cityH">
          <input
            type="text"
            class="inputO"
            placeholder="选择城市"
            disabled="true"
            v-model="cityId.name"
          />
          <img
            src="@/assets/img/partner/fangxiang.png"
            alt="下拉"
            v-if="cityR.length === 0"
          />
          <img src="@/assets/img/partner/fangs.png" alt="下拉" v-else />
        </div>
        <div class="nameCity" @click.stop="areaH">
          <input
            type="text"
            class="inputO"
            placeholder="选择区"
            disabled="true"
            v-model="areaId.name"
          />
          <img
            src="@/assets/img/partner/fangxiang.png"
            alt="下拉"
            v-if="cityS.length === 0"
          />
          <img src="@/assets/img/partner/fangs.png" alt="下拉" v-else />
        </div>
      </div>
      <div class="areseT">
        <ul v-if="city.length > 0">
          <li
            v-for="item in city"
            :key="item.id"
            @click.stop="hitCity(item)"
            :class="{ active: provinceId.id == item.id }"
          >
            {{ item.name }}
          </li>
        </ul>
        <ul
          v-if="cityR.length > 0"
          style="margin: 0 .3rem;"
          :class="show ? 'act' : ''"
        >
          <li
            v-for="item in cityR"
            :key="item.id"
            @click.stop="hitCityS(item)"
            :class="{ active: cityId.id == item.id }"
          >
            {{ item.name }}
          </li>
        </ul>
        <ul v-if="cityS.length > 0" :class="showT ? 'actT' : ''">
          <li
            v-for="item in cityS"
            :key="item.id"
            @click.stop="hitAll(item)"
            :class="{ active: areaId.id == item.id }"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div
    style="text-align: center;background-color: rgba(250, 250, 250, 1);padding-bottom:.4rem"
  >
    <img
      src="@/assets/img/partner/btn.png"
      alt="立即提交"
      class="BtNs"
      @click="BtNs"
    />
  </div>
</template>
<script lang="ts">
import { ref, watch, nextTick } from "vue"
import { province, cityArea, commit } from "@/api/api"
import store from "@/store"
export default {
  setup() {
    const city = ref([])
    const cityR = ref([])
    const cityS = ref([])
    const contact = ref("")
    const name = ref("")
    const provinceId = ref("")
    const cityId = ref("")
    const areaId = ref("")
    const show = ref<boolean>(false)
    const showT = ref<boolean>(false)
    // const isDown = ref<boolean>(false)
    const huiWrap = ref(null)
    const timer = ref(null)
    const osTop = ref(0)
    // const text = computed(() => {
    //   return store.state.test
    // })
    const renTest = (top) => {
      osTop.value += Math.floor(top / 28)
      document.documentElement.scrollTop = document.body.scrollTop = osTop.value
      if (osTop.value >= top) {
        window.cancelAnimationFrame(timer.value)
        osTop.value = 0
      } else {
        timer.value = window.requestAnimationFrame(() => renTest(top))
      }
    }
    watch(
      () => store.state.test,
      (val) => {
        if (val) {
          nextTick(() => {
            const top = huiWrap.value.getBoundingClientRect().top
            // timer.value = setInterval(() => {
            //   osTop.value += 200
            //   document.documentElement.scrollTop = document.body.scrollTop =
            //     osTop.value
            //   if (osTop.value >= top) {
            //     clearInterval(timer.value)
            //     osTop.value = 0
            //   }
            // }, 30)
            timer.value = window.requestAnimationFrame(() => renTest(top))
            // 清除为空再次触发点击
            store.dispatch("setTest", "")
          })
        }
      }
    )
    const level = () => {
      province().then((res) => {
        const costl = res.data
        if (costl["code"] === 200) {
          city.value = costl["data"]
        }
      })
    }
    const hideW = () => {
      cityS.value = []
      cityR.value = []
      city.value = []
    }
    const hitCity = (item) => {
      cityS.value = []
      cityR.value = []
      provinceId.value = item
      cityId.value = ""
      areaId.value = ""
      cityArea(item.id).then((res) => {
        const costl = res.data
        if (costl["code"] === 200) {
          cityR.value = costl["data"]
          if (
            city.value.length === 0 &&
            cityS.value.length === 0 &&
            cityR.value.length > 0
          ) {
            show.value = true
          } else {
            show.value = false
          }
        }
      })
    }
    const hitCityS = (item) => {
      cityS.value = []
      cityId.value = item
      areaId.value = ""
      cityArea(item.id).then((res) => {
        const costl = res.data
        if (costl["code"] === 200) {
          cityS.value = costl["data"]
          if (
            city.value.length === 0 &&
            cityR.value.length === 0 &&
            cityS.value.length > 0
          ) {
            showT.value = true
          } else {
            showT.value = false
          }
        }
      })
    }
    const cityH = () => {
      if (provinceId.value && cityR.value.length === 0) {
        hitCity(provinceId.value)
      }
    }

    const areaH = () => {
      if (cityId.value && cityS.value.length === 0) {
        hitCityS(cityId.value)
      }
    }
    const hitAll = (item) => {
      areaId.value = item
      cityS.value = []
      cityR.value = []
      city.value = []
    }
    const checkPhone = (e) => {
      const value = e.target.value
      const rule = /^1[3|4|5|7|8|9][0-9]\d{4,11}$/
      if (!rule.test(value) && value !== "") {
        alert("手机号输入错误")
        contact.value = ""
      }
    }
    const BtNs = () => {
      if (name.value === "") {
        alert("请输入姓名")
        return
      }
      if (contact.value === "") {
        alert("请输入联系方式")
        return
      }
      if (
        provinceId.value === "" ||
        cityId.value === "" ||
        areaId.value === ""
      ) {
        alert("请输入地区")
        return
      }
      const par = {
        name: name.value,
        contact: contact.value,
        provinceId: provinceId.value["id"],
        cityId: cityId.value["id"],
        areaId: areaId.value["id"],
      }
      commit(par).then((res) => {
        const ret = res.data
        if (ret["code"] === 200) {
          alert(ret["msg"])
        }
      })
    }
    return {
      city,
      cityR,
      cityS,
      contact,
      name,
      provinceId,
      cityId,
      areaId,
      show,
      showT,
      hideW,
      cityH,
      areaH,
      hitCity,
      hitCityS,
      hitAll,
      checkPhone,
      BtNs,
      level,
      huiWrap,
    }
  },
}
</script>
<style scoped lang="scss">
.send {
  width: 3.63rem;
  height: 1.63rem;
  position: absolute;
  bottom: 1.75rem;
  left: 3.25rem;
}

.middleT {
  background: url(../assets/img/partner/Benefits.png) no-repeat center;
  background-size: 100% 100%;
  max-width: 14.89rem;
  margin: 0 auto;
  margin-top: 1.18rem;
  position: relative;
  height: 0.55rem;
}

.middleT .townW {
  left: 5.31rem;
}

.middleT .townL {
  left: 6.43rem;
}

.townA {
  max-width: 13.2rem;
  margin: 0 auto;
  display: flex;
  display: -webkit-flex;
  color: #fff;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.22rem;
}

.townA .same {
  width: 4rem;
  height: 6rem;
  box-shadow: 0px 0.05rem 0.6rem 0px rgba(0, 33, 13, 0.2);
  border-radius: 0.1rem;
  text-align: center;
}

.townA .same:nth-child(1) {
  background: url(../assets/img/partner/one-bg.png) no-repeat center;
  background-size: 100% 100%;
  background-color: #030d19;
}

.townA .same:nth-child(2) {
  background: url(../assets/img/partner/two-bg.png) no-repeat center;
  background-size: 100% 100%;
  background-color: #030d19;
}

.townA .same:nth-child(3) {
  background: url(../assets/img/partner/three-bg.png) no-repeat center;
  background-size: 100% 100%;
  background-color: #030d19;
}

.townA > .same:hover {
  background: rgba(227, 165, 0, 1);
}

.townA .same img {
  margin-top: 1.41rem;
  margin-bottom: 0.9rem;
}

.townA .same:nth-child(1) img {
  width: 0.29rem;
  height: 0.52rem;
}

.townA .same:nth-child(2) img {
  width: 0.48rem;
  height: 0.56rem;
}

.townA .same:nth-child(3) img {
  width: 0.56rem;
  height: 0.56rem;
}

.townA .mid {
  margin-bottom: 0.45rem;
  font-size: 0.3rem;
}

.huiWrap {
  /* height: 9.87rem; */
  background: rgba(250, 250, 250, 1);
  padding-top: 1.36rem;
  padding-bottom: 0.6rem /* 60/100 */;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  /* Firefox */
  -webkit-box-sizing: border-box;
  /* Safari */
}

.huiWrap .huiBg {
  max-width: 13.82rem;
  height: 0.55rem;
  background: url(../assets/img/partner/huit.png) no-repeat center;
  background-size: 100% 100%;
  margin: 0 auto;
  position: relative;
}

.huiWrap .huiT {
  left: 2.77rem;
}

.huiWrap .huiL {
  left: 5.9rem;
}

.huiWrap .huiCon {
  max-width: 12.3rem;
  margin: 0 auto;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 1.08rem;
}

.huiWrap .huiCon .same {
  width: 3.05rem;
  text-align: center;
  padding-bottom: 0.95rem;
}

.huiWrap .huiCon .same > div:nth-child(2) {
  font-size: 0.22rem;
  font-family: PingFang SC;
  font-weight: 400;
  color: rgba(7, 33, 47, 1);
}

.huiWrap .huiCon .same > div:nth-child(3) {
  font-size: 0.18rem;
  font-family: PingFang SC;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  margin-top: 0.29rem;
}

.huiWrap .huiCon img {
  width: 1.59rem;
  height: 1.59rem;
}

.townY {
  max-width: 12.99rem;
  height: 0.55rem;
  background: url(../assets/img/partner/cityP.png) no-repeat center;
  background-size: 100% 100%;
  margin: 0 auto;
  margin-top: 1.36rem;
  margin-bottom: 1.22rem;
  position: relative;
}

.townY .townT {
  left: 3.78rem;
}

.townY .townB {
  left: 5.5rem;
}

.sybase {
  background: url(../assets/img/partner/pbg.png) no-repeat center;
  background-size: 100% 100%;
  height: 4.2rem;
}

.syAll {
  max-width: 13.2rem;
  padding-top: 1rem;
  margin: 0 auto;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: space-between;
}

.syAll > div {
  width: 3.5rem;
  height: 2rem;
  background: rgba(255, 255, 255, 1);
  border-radius: 0.1rem;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: center;
}

.syAll .phone img {
  width: 0.65rem;
  height: 0.69rem;
}

.syAll .company img {
  width: 0.65rem;
  height: 0.7rem;
}

.syAll .trust img {
  width: 0.81rem;
  height: 0.69rem;
}

.syAll .same {
  margin-left: 0.48rem;
}

.syAll .same div:nth-child(2) {
  margin-top: 0.29rem;
  font-size: 0.18rem;
  font-family: PingFang SC;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
}

.syAll .same div:nth-child(1) {
  color: #07212f;
}

.cityP .cityT {
  left: 3.77rem;
}

.cityP .cityN {
  position: absolute;
  bottom: -0.4rem;
  left: 4.21rem;
  font-family: PingFang SC;
  font-weight: 400;
  color: rgba(7, 33, 46, 1);
}

.cityP .cityL {
  position: absolute;
  bottom: -0.66rem;
  left: 5.5rem;
  width: 2rem;
  height: 0.08rem;
  background: rgba(247, 181, 0, 1);
  border-radius: 0.04rem;
}

.inputAll {
  max-width: 12.59rem;
  margin: 0 auto;
  margin-top: 1.74rem;
}

.inputCon {
  display: flex;
  align-items: center;
  justify-content: space-between;
  display: -webkit-flex;
  padding-top: 0.29rem;
  padding-bottom: 0.8rem;
}

.nameAll {
  width: 6rem;
  height: 0.8rem;
  border: 1px solid rgba(179, 179, 179, 1);
  border-radius: 0.04rem;
  background: #fff;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 0.3rem;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  /* Firefox */
  -webkit-box-sizing: border-box;
  /* Safari */
}

.nameAll .line {
  height: 0.5rem;
  background: #b3b3b3;
  width: 1px;
  margin-left: 0.2rem;
}

.nameAll input {
  font-size: 0.22rem;
  color: #07222f;
}

.nameAll .inputO {
  width: 4.58rem;
}

.nameAll .inputT {
  width: 4.12rem;
}

.nameAll .name {
  color: #07222f;
}

.inputCity {
  display: flex;
  align-items: center;
  justify-content: space-between;
  display: -webkit-flex;
  padding-top: 0.3rem;
}

.nameCity {
  width: 4rem;
  height: 0.8rem;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  /* Firefox */
  -webkit-box-sizing: border-box;
  /* Safari */
  padding: 0 0.3rem;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(179, 179, 179, 1);
  border-radius: 0.04rem;
  position: relative;
}

.nameCity .bot {
  position: absolute;
  bottom: -0.6rem;
  left: 0;
  width: 100%;
}

.nameCity input {
  font-size: 0.22rem;
  color: #07222f;
}

.nameCity input::-webkit-input-placeholder {
  font-size: 0.22rem;
  font-family: PingFang SC;
  font-weight: 400;
  color: rgba(7, 34, 47, 1);
}

.nameCity img {
  width: 0.25rem;
  height: 0.18rem;
}

.BtNs {
  width: 3.63rem;
  height: 1.63rem;
}

.BtNs:hover {
  cursor: pointer;
}

.areseT {
  display: flex;
  align-items: center;
  display: -webkit-flex;
}

.areseT ul {
  width: 4rem;
  height: 2.2rem;
  overflow-y: scroll;
  background-color: #fff;
  color: #07222f;
}

.areseT ul li {
  padding-left: 0.3rem;
  padding-bottom: 0.19rem;
}

.areseT ul li:nth-child(1) {
  padding-top: 0.19rem;
}

.areseT .active {
  color: #f8b500;
}

.act {
  margin-left: 4.3rem !important;
}

.actT {
  margin-left: 8.6rem !important;
}
</style>
