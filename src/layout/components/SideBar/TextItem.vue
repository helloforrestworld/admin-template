<template>
  <div class="text-item">
    <svg-icon v-if="item.meta && item.meta.icon" :icon="item.meta.icon"></svg-icon>
    {{item.meta && item.meta.title}}
  </div>
</template>

<script>
export default {
  name: 'TextItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
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
.text-item {
  display: inline-block;
}
</style>
