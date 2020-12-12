<template>
  <div class="wrapAll">
    <!-- 城市合伙人权益 -->
    <div class="middleT">
      <p class="mtitle townW">完善的培训体系</p>
      <div class="mline townL"></div>
    </div>
    <div class="townA">
      <div class="same">
        <img src="@/assets/img/operation/one.png" alt="总部培训" />
        <div class="mid" style="left: .91rem;">总部培训</div>
        <div class="word">
          帮助新晋代理商快速上手新业务
        </div>
      </div>
      <div class="same">
        <img src="@/assets/img/operation/two.png" alt="在线培训" />
        <div class="mid" style="left: .91rem;">在线培训</div>
        <div class="word">
          定期开展在线培训，针对常 见问题进行解答
        </div>
      </div>
      <div class="same">
        <img src="@/assets/img/operation/three.png" alt="总部实地培训" />
        <div class="mid" style="left: .61rem;">总部实地培训</div>
        <div class="word" style="padding: .3rem .06rem;">
          总部运营骨干实地培训合伙 人团队，助力合伙人开拓市场
        </div>
      </div>
      <div class="same">
        <img src="@/assets/img/operation/four.png" alt="商学院" />
        <div class="mid" style="left: 1.06rem;">商学院</div>
        <div class="word">
          惠通商学院，赋能实体建立 人才体系
        </div>
      </div>
    </div>
    <!-- 汇通 -->
    <div class="huiWrap" style="margin-top: 1rem;">
      <div class="huiBg">
        <p class="huiT mtitle" style="color: #fff;">优质的服务</p>
        <div class="huiL mline"></div>
      </div>
      <div class="huiCon">
        <div class="same">
          <img src="@/assets/img/operation/1.png" alt="运营支持" />
          <div>一对一专属团队服务，一<br />城一人，15分钟快速响应</div>
        </div>
        <div class="same">
          <img src="@/assets/img/operation/2.png" alt="奖励支持" />
          <div>每周总部和合伙人保持电<br />话交流推进业务快速发展</div>
        </div>
        <div class="same">
          <img src="@/assets/img/operation/3.png" alt="培训支持" />
          <div>
            总部定期巡店，开展集中<br />培训与服务，做服务商强<br />有力的后盾
          </div>
        </div>
        <div class="same">
          <img src="@/assets/img/operation/4.png" alt="技术支持" />
          <div>招商会支持<br />专业的招商会策划支持</div>
        </div>
        <div class="same">
          <img src="@/assets/img/operation/5.png" alt="产品支持" />
          <div>媒体曝光，打造合伙人在<br />当地的影响力</div>
        </div>
        <div class="same">
          <img src="@/assets/img/operation/6.png" alt="物料支持" />
          <div>完善的物料支持海报、宣<br />传手册、三折页等</div>
        </div>
        <div class="same">
          <img src="@/assets/img/operation/7.png" alt="招商会支持" />
          <div>
            优秀合伙人业务交流<br />
            一路同行，让优秀合伙人<br />
            和你面对面沟通
          </div>
        </div>
        <div class="same">
          <img src="@/assets/img/operation/8.png" alt="金融支持" />
          <div>
            大客户对接<br />
            总部支持大型项目对接让<br />
            您无后顾之忧
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.middleT {
  background: url(../assets/img/operation/Training.png) no-repeat center;
  background-size: 100% 100%;
  max-width: 9.21rem /* 1489/100 */;
  margin: 0 auto;
  margin-top: 1.18rem /* 118/100 */;
  position: relative;
  height: 0.55rem /* 55/100 */;
}
.middleT .townW {
  left: 2.5rem /* 531/100 */;
}
.middleT .townL {
  left: 3.61rem /* 643/100 */;
}
.townA {
  max-width: 13.2rem /* 1320/100 */;
  margin: 0 auto;
  display: flex;
  display: -webkit-flex;
  color: #fff;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.22rem /* 122/100 */;
}
.townA .same {
  width: 3rem /* 400/100 */;
  height: 3.8rem /* 600/100 */;
  box-shadow: 0px 0.05rem 0.6rem 0px rgba(0, 33, 13, 0.2);
  border-radius: 0.1rem;
  position: relative;
}
.townA .same img {
  height: 2.63rem;
}
.townA .mid {
  position: absolute;
  font-size: 0.3rem;
  font-family: PingFang SC;
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
  top: 1.17rem /* 117/100 */;
}
.townA .word {
  font-family: PingFang SC;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  padding: 0.3rem 0.18rem;
}
.huiWrap {
  background: url(../assets/img/operation/mbg.png) no-repeat center;
  background-size: 100% 100%;
  padding-top: 1.2rem;
}
.huiWrap .huiBg {
  max-width: 13.82rem /* 1382/100 */;
  height: 0.55rem /* 55/100 */;
  background: url(../assets/img/operation/Training.png) no-repeat center;
  background-size: 100% 100%;
  margin: 0 auto;
  position: relative;
}
.huiWrap .huiT {
  left: 5.51rem /* 277/100 */;
}
.huiWrap .huiL {
  left: 6.02rem;
}
.huiWrap .huiCon {
  max-width: 12.3rem;
  margin: 0 auto;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 1.08rem /* 108/100 */;
}
.huiWrap .huiCon .same {
  width: 3.05rem /* 305/100 */;
  text-align: center;
  padding-bottom: 0.95rem /* 95/100 */;
}
.huiWrap .huiCon .same > div:nth-child(2) {
  font-family: PingFang SC;
  font-weight: 400;
  color: #fff;
  margin-top: 0.29rem /* 29/100 */;
}
.huiWrap .huiCon img {
  width: 2.4rem /* 159/100 */;
  height: 2.4rem /* 159/100 */;
}
</style>
