<template>
  <div class="menu-wrapper" v-if="!isHidden">
    <template v-if="!renderItem.children || renderItem.children.length === 0">
      <app-link :to="renderBasicPath">
        <el-menu-item :index="renderBasicPath">
          <TextItem :item="renderItem"></TextItem>
        </el-menu-item>
      </app-link>
    </template>

    <el-submenu v-else :index="resolvePath(renderItem.path)">
      <template slot="title">
        <TextItem :item="renderItem"></TextItem>
      </template>
      <sidebar-item
        v-for="child in renderItem.children"
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
      defaultPath: ''
    }
  },
  created() {
  },

  computed: {
    children() {
      let children = this.item.children
      if (!children || this.item.children.length === 0) {
        return []
      }
      children = children.filter(child => {
        return !child.hidden
      })
      return children
    },
    renderItem() {
      let item = this.item
      if (!item.alwaysShowRoot && this.children.length === 1) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.defaultPath = this.resolvePath(this.children[0].path)
        return { ...this.children[0], path: this.resolvePath(this.children[0].path) }
      } else {
        return item
      }
    },
    renderBasicPath() {
      return this.defaultPath || this.basicPath
    },
    isHidden() {
      return this.item.hidden
    }
  },

  methods: {
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath
      }
      return path.resolve(this.renderBasicPath, routePath)
    }
  }
}
</script>

<style lang="less" scoped>
.menu-wrapper a {
  text-decoration: none;
}
</style>
