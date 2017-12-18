<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    makeConfig () {}
  },
  created () {},
  watch: {}
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body, html, #app {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

body {
  background-color: #fbf9fe;
}

.router-view {
  width: 100%;
  top: 46px;
}
</style>
