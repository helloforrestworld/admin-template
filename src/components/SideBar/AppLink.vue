<template>
  <!-- :is="0"仅仅是解决编辑器报错操作, is属性最终由getLinkProps返回值决定 -->
  <component class="app-link" :is="0" v-bind="getLinkProps()">
    <slot/>
  </component>
</template>

<script>
import { isExternal } from '@/helpers/utils'
export default {
  name: 'AppLink',
  props: {
    to: {
      type: String,
      required: true
    }
  },
  methods: {
    getLinkProps() {
      let url = this.to
      if (isExternal(url)) {
        return {
          is: 'a',
          href: url,
          target: '_blank'
        }
      } else {
        return {
          is: 'router-link',
          to: url
        }
      }
    }
  }
}
</script>
