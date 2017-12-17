<template>
  <div class="main-view">
    <model-view :model-data="modelData['xhs-model1']"></model-view>
  </div>
</template>

<script type="text/babel">
  import modelData from '../../../utils/data/models'
  import ModelView from './model.vue'
  export default {
    name: 'mainView',
    data: () => ({
      modelData
    }),
    components: {
      ModelView
    }
  }
</script>

<style type="text/scss" lang="scss">
  .main-view {
    padding-top: 0;
  }
</style>
