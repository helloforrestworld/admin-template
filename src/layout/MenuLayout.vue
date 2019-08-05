<template>
  <section class="menu-layout">
    <basic-layout>
      <div class="flex-wrap">
        <side-bar class="left-menu" :routes="routes"></side-bar>
        <section class="right-container">
          <router-view/>
        </section>
      </div>
    </basic-layout>
  </section>
</template>

<script>
import BasicLayout from './BasicLayout'
import SideBar from '@/components/SideBar/index'

export default {
  name: '',
  components: { BasicLayout, SideBar },
  data() {
    return {}
  },
  created() {},
  computed: {
    routes() {
      return this.$store.getters.permission_routes[this.routeModuleName]
    },
    path() {
      return this.$route.path
    },
    routeModuleName() {
      const moduleName = this.path.match(/^\/([^/]*)/)
      return moduleName && moduleName[1]
    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.menu-layout {
  .flex-wrap {
    display: flex;
    height: 100%;
    .right-container {
      position: relative;
      flex: 1;
      padding: 20px;
    }
  }
}
</style>
