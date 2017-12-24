<template>
  <div class="preview">
    <main-view></main-view>
  </div>
</template>

<script type="text/babel">
  import MainView from '../main'
  export default {
    name: 'preview',
    components: {
      MainView
    }
  }
</script>

<style type="text/scss" lang="scss">
  html, body {
    overflow: scroll;
  }
  #app {
    height: auto;
    overflow: visible;
  }
</style>
