<template>
  <div class="footer">
    <div class="left">
      <div>公司名称：惠通（浙江）控股有限公司</div>
      <div>联系我们：4001185690</div>
      <div>
        地<span style="visibility:hidden">地址</span
        >址：浙江省杭州市滨江区西兴街道江陵路1916号兴祺大厦1幢1803室
      </div>
      <div>企业邮箱：htkgyxgs@163.com</div>
    </div>
    <div class="right">
      <img src="@/assets/img/wecha.png" alt="二维码" class="wheat" />
      <div>扫码联系我们</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"

@Options({
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  msg!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
  padding: 1.2rem 3.6rem 1.45rem 3.6rem;
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
  -webkit-box-sizing: border-box; /* Safari */
  display: flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  background: rgba(47, 52, 57, 1);
  .wheat {
    width: 2rem;
    height: 2rem;
  }
  .left div {
    padding-bottom: 0.4rem;
  }
  .right {
    text-align: center;
    div {
      padding-top: 0.3rem;
    }
  }
}
</style>
