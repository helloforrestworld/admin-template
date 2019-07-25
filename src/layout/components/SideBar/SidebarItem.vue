<template>
  <div class="menu-wrapper">
    <template v-if="!item.children || item.children.length === 0">
      <router-link :to="basicPath">
        <el-menu-item :index="basicPath">
          <TextItem :item="item"></TextItem>
        </el-menu-item>
      </router-link>
    </template>

    <template v-else-if="item.children.length === 1 && !item.alwaysShowRoot">
      <router-link :to="resolvePath(item.children[0].path)">
        <el-menu-item :index="resolvePath(item.children[0].path)">
          <TextItem :item="item.children[0]"></TextItem>
        </el-menu-item>
      </router-link>
    </template>

    <el-submenu v-else :index="resolvePath(item.path)">
      <template slot="title">
        <TextItem :item="item"></TextItem>
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
import TextItem from './TextItem'

export default {
  name: 'SidebarItem',
  components: { TextItem },
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
      return path.resolve(this.basicPath, routePath)
    }
  }
}
</script>

<style lang="less" scoped>
.menu-wrapper a {
  text-decoration: none;
}
</style>
