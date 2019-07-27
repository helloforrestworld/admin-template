<template>
  <section class="app-wrapper">
    <sidebar class="sidebar-container" />
    <section class="main-container">
      <app-main />
    </section>
  </section>
</template>

<script>
import { AppMain, Sidebar } from './components'

export default {
  name: 'Layout',
  components: { AppMain, Sidebar },
  props: {},
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
#app {
  .app-wrapper {
    position: relative;
    width: 1208px;
    height: calc(100% - 50px);
    position: relative;
    margin: 20px auto 30px auto;
    background: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }
  .sidebar-container {
    width: 240px;
    height: 100%;
    transition: width 0.28s;
    position: absolute;
    font-size: 0px;
    top: 0;
    bottom: 0;
    left: 0;
    border-right: 1px solid #e7e7e7;
    z-index: 1001;
    overflow: hidden;
  }
  .main-container {
    height: 100%;
    margin-left: 240px;
    overflow-y: auto;
  }
}
</style>
