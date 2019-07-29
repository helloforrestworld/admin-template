<template>
  <section class="basic-layout">
    <banner class="banner-container"></banner>
    <section class="app-wrapper-wrap">
      <section class="app-main">
        <slot>
          <router-view/>
        </slot>
      </section>
    </section>
  </section>
</template>

<script>
import Banner from '@/components/Banner/index.vue'
console.log(Banner)

export default {
  name: 'BasicLayout',
  components: { Banner },
  data() {
    return {

    }
  },
  created() {},
  methods: {

  }
}
</script>

<style lang="less" scoped>
.basic-layout {
  height: 100vh;
  .banner-container {
    height: 58px;
  }
  .app-wrapper-wrap {
    height: calc(100% - 58px);
    .app-main {
      position: relative;
      width: 1208px;
      height: calc(100% - 50px);
      position: relative;
      margin: 20px auto 30px auto;
      background: #fff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    }
  }
}
</style>
