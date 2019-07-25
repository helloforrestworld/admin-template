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
  name: 'layout',
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
    width: 100%;
    height: 100%;
  }
  .sidebar-container {
    width: 210px;
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
    margin-left: 210px;
    overflow-y: auto;
  }
}
</style>
