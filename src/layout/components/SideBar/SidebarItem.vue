<template>
  <div class="menu-wrapper">
    <template v-if="!item.children || item.children.length === 0">
      <router-link :to="basicPath">
        <el-menu-item :index="basicPath">
          <svg-icon v-if="item.meta && item.meta.icon" :icon="item.meta.icon"></svg-icon>
          {{item.meta.title}}
        </el-menu-item>
      </router-link>
    </template>

    <template v-else-if="item.children.length === 1 && !item.alwaysShowRoot">
      <router-link :to="resolvePath(item.children[0].path)">
        <el-menu-item :index="resolvePath(item.children[0].path)">
          <svg-icon v-if="item.children[0].meta && item.children[0].meta.icon" :icon="item.children[0].meta.icon"></svg-icon>
          {{item.children[0].meta.title}}
        </el-menu-item>
      </router-link>
    </template>

    <el-submenu v-else :index="resolvePath(item.path)">
      <template slot="title">
        <svg-icon v-if="item.meta && item.meta.icon" :icon="item.meta.icon"></svg-icon>
        {{item.meta.title}}
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :basicPath="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'

export default {
  name: 'SidebarItem',
  components: {},
  props: {
    item: {
      type: Object,
      required: true
    },
    basicPath: {
      type: String,
      default: ''
    }
  },
  data() {
    return {

    }
  },
  created() {
  },
  methods: {
    resolvePath(routePath) {
      console.log('basicPath: ', this.basicPath)
      console.log('routePath: ', routePath)
      console.log('result: ', path.resolve(this.basicPath, routePath))
      console.log('-----------------------------')
      return path.resolve(this.basicPath, routePath)
    },
    resolve(path) {
      return path.resolve(path)
    }
  }
}
</script>

<style lang="less" scoped>
.menu-wrapper a {
  text-decoration: none;
}
</style>
