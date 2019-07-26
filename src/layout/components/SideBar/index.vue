<template>
  <section class="sidebar">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        mode="vertical"
        :default-active="path"
        :collapse-transition="false"
        :unique-opened="false"
      >
        <sidebar-item v-for="item in routes" :key="item.path" :item="item" :basicPath="item.path"></sidebar-item>
      </el-menu>
    </el-scrollbar>
  </section>
</template>

<script>
import SidebarItem from './SidebarItem'
export default {
  name: '',
  data() {
    return {

    }
  },
  created() {
  },
  components: { SidebarItem },
  methods: {
  },
  computed: {
    routes() {
      return this.$store.getters.asyncRoutes
    },
    path() {
      return this.$route.path
    }
  }
}
</script>

<style scoped>
/* 深度选择器 */
/* https://vue-loader.vuejs.org/guide/scoped-css.html#deep-selectors */
.sidebar >>> .el-menu {
  height: 100%;
  width: 100% !important;
  background: #f4f4f4;
}
.sidebar >>> .scrollbar-wrapper {
  overflow-x: hidden;
}
.sidebar >>> .el-scrollbar {
  height: 100%;
}
.sidebar >>> .is-horizontal {
  display: none;
}
.sidebar >>> .svg-icon {
    margin-right: 16px;
}
</style>
<style lang="less" scoped>
.sidebar {
  background: #f4f4f4;
}
</style>
