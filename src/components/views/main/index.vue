<template>
  <div class="main-view">
    <model-view :model-data="modelData['xhs-model1']"></model-view>
    <box gap="10px 10px" class="bottom-btn-wrap">
      <x-button :gradients="['#1D62F0', '#19D5FD']" @click="makeConfig">生成数据</x-button>
      <x-button :gradients="['#A644FF', '#FC5BC4']" @click="makePicture">生成图片</x-button>
    </box>
  </div>
</template>

<script type="text/babel">
  import modelData from '../../../utils/data/models'
  import ModelView from './model.vue'
  import { XButton, Box } from 'vux'
  export default {
    name: 'mainView',
    data: () => ({
      modelData
    }),
    methods: {
      makeConfig () {
        console.log(this.modelData['xhs-model1'])
      },
      makePicture () {
        console.log(this.modelData['xhs-model1'])
      }
    },
    components: {
      ModelView, XButton, Box
    }
  }
</script>

<style type="text/scss" lang="scss">
  .main-view {
    padding-top: 0;
  }
</style>
