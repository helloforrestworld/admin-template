<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  data() {
    return {

    }
  },
  created() {},
  methods: {

  },
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="less" scoped>
.app-main {
  box-sizing: border-box;
  padding: 12px 20px;
  overflow: hidden;
}
</style>
