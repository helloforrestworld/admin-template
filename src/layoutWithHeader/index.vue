<template>
  <section class="app-wrapper-wh">
    <banner class="banner-container"></banner>
    <section class="app-wrapper-wh-main">
      <layout></layout>
    </section>
  </section>
</template>

<script>
import { Banner } from './components'
import Layout from '@/layout/index'

export default {
  name: 'LayoutWithHeader',
  components: { Banner, Layout },
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
.app-wrapper-wh {
  height: 100vh;
  .banner-container {
    height: 58px;
  }
  .app-wrapper-wh-main {
    height: calc(100% - 58px);
  }
}
</style>
