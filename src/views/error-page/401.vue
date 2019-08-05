<template>
  <div class="errPage-container">
    <div class="errPage-left">
      <h1 class="text-jumbo">
        Oops!
      </h1>
      gif来源<a href="https://zh.airbnb.com/" target="_blank">airbnb</a> 页面
      <h2>你没有权限去该页面</h2>
      <h6>如有不满请联系你领导</h6>
      <ul class="list-unstyled">
        <li>或者你可以去:</li>
        <li class="link-type">
          <router-link to="/">
            回首页
          </router-link>
        </li>
        <li class="link-type">
          <a href="https://www.taobao.com/">随便看看</a>
        </li>
      </ul>
    </div>
    <div class="errPage-right">
      <img class="error-gif" :src="errGif" width="313" height="428" alt="Girl has dropped her ice cream.">
    </div>
  </div>
</template>

<script>
import errGif from '@/assets/401_images/401.gif'

export default {
  name: 'Page401',
  data() {
    return {
      errGif: errGif + '?' + +new Date(),
      ewizardClap: 'https://wpimg.wallstcn.com/007ef517-bafd-4066-aae4-6883632d9646'
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
  .errPage-container {
    width: 100%;
    height: 100%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    box-sizing: border-box;
    .errPage-left {
      margin-right: 100px;
    }
    .pan-gif {
      margin: 0 auto;
      display: block;
    }
    .pan-img {
      display: block;
      margin: 0 auto;
      width: 100%;
    }
    .text-jumbo {
      font-size: 49px;
      margin: 30px 0;
      font-weight: 700;
      color: #484848;
    }
    .list-unstyled {
      font-size: 14px;
      li {
        padding-bottom: 5px;
      }
      a {
        color: #008489;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>
