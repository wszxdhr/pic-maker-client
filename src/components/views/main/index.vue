<template>
  <div class="main-view">
    <model-view :model-data="modelData['xhs-model1']"></model-view>
    <box gap="10px 10px" class="bottom-btn-wrap">
      <!--<x-button :gradients="['#1D62F0', '#19D5FD']" @click.native="makeConfig">生成数据</x-button>-->
      <x-button :gradients="['#A644FF', '#FC5BC4']" @click.native="makePicture">生成图片</x-button>
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
        this.$vux.confirm.prompt('请稍等...', {
          onCancel () {},
          onConfirm () {}
        })
        this.$vux.confirm.setInputValue(this.getCurrentConfig())
      },
      getCurrentConfig () {
        return this.modelData['xhs-model1']
      },
      makePicture () {
        this.$api.makePicture(this.getCurrentConfig()).then(res => {
          console.log(res.data)
          console.log(`http://screenshot.anymelon.com${res.data.id || res.data.url}`)
        })
      },
      saveConfig () {
        localStorage.setItem('elements', JSON.stringify(this.modelData['xhs-model1']))
      },
      readConfig () {
        this.modelData['xhs-model1'] = JSON.parse(localStorage.getItem('elements'))
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
    * {
      font-family: "SimHei", "Lucida Grande", Helvetica, Arial, sans-serif;
    }
  }
</style>
