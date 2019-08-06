<template>
  <div class="menu-wrapper" v-if="!item.hidden">
    <template v-if="!item.children || item.children.length === 0">
      <app-link :to="basicPath">
        <el-menu-item :index="basicPath">
          <TextItem :item="item"></TextItem>
        </el-menu-item>
      </app-link>
    </template>

    <template v-else-if="item.children.length === 1 && !item.alwaysShowRoot">
      <app-link :to="resolvePath(item.children[0].path)">
        <el-menu-item :index="resolvePath(item.children[0].path)">
          <TextItem :item="item.children[0]"></TextItem>
        </el-menu-item>

        <!-- <el-menu-item :index="resolvePath(item.children[0].path)">
          <el-submenu v-if="item.children[0].children" :index="resolvePath(item.children[0].path)">
            <template slot="title">
              <TextItem :item="item.children[0]"></TextItem>
            </template>
            <sidebar-item
              v-for="child in item.children[0].children"
              :key="child.path"
              :item="child"
              :basicPath="resolvePath(child.path)"
            />
          </el-submenu>
          <TextItem v-else :item="item.children[0]"></TextItem>
        </el-menu-item> -->
      </app-link>
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
import AppLink from './AppLink'
import { isExternal } from '@/helpers/utils'

export default {
  name: 'SidebarItem',
  components: { TextItem, AppLink },
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
      if (isExternal(routePath)) {
        return routePath
      }
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
