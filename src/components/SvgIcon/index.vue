<template>
  <!-- 支持外链svg -->
  <!-- <svg-icon icon="https://xxxx.svg" /> -->
  <div v-if="isExternalLink" :style="styleExternalIcon" class="svg-external-icon svg-icon"></div>

  <svg v-else :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"/>
  </svg>
</template>

<script>

// eslint-disable-next-line no-unused-vars
import { isExternal } from '@/helpers/utils'

export default {
  name: '',
  props: {
    icon: {
      type: String,
      required: true
    },
    iconClass: String
  },
  data() {
    return {

    }
  },
  created() {},
  computed: {
    isExternalLink() {
      return isExternal(this.icon)
    },
    styleExternalIcon() {
      return {
        mask: `url(${this.icon}) no-repeat 50% 50%`,
        '-webkit-mask': `url(${this.icon}) no-repeat 50% 50%`
      }
    },
    iconName() {
      return `#icon-${this.icon}`
    },
    svgClass() {
      if (this.iconClass) {
        return 'svg-icon ' + this.iconClass
      } else {
        return 'svg-icon'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover!important;
  display: inline-block;
}
</style>
