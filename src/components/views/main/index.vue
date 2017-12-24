<template>
  <div class="main-view">
    <model-view :model-data="modelData[$route.params.id]"></model-view>
    <box gap="10px 10px" class="bottom-btn-wrap">
      <!--<x-button :gradients="['#1D62F0', '#19D5FD']" @click.native="makeConfig">生成数据</x-button>-->
      <x-button :gradients="['#A644FF', '#FC5BC4']" @click.native="makePicture">生成图片</x-button>
    </box>
    <x-dialog :show.sync="showPicture">
      <div class="preview-img-wrap" v-if="pictureUrl">
        <img class="preview-img" :src="pictureUrl" alt=""/>
      </div>
      <p v-else>加载中，稍等哈</p>
      <div class="close-btn" @click="showPicture = false">×</div>
    </x-dialog>
  </div>
</template>

<script type="text/babel">
  import modelData from '../../../utils/data/models'
  import ModelView from './model.vue'
  import { XButton, Box, XDialog } from 'vux'
  export default {
    name: 'mainView',
    data: () => ({
      modelData,
      showPicture: false,
      pictureUrl: ''
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
        return this.modelData[this.$route.params.id]
      },
      makePicture () {
        this.pictureUrl = ''
        this.showPicture = true
        this.$api.makePicture(this.getCurrentConfig()).then(res => {
          this.pictureUrl = res.data.host + res.data.filename
        })
      },
      saveConfig () {
        localStorage.setItem('elements', JSON.stringify(this.modelData[this.$route.params.id]))
      },
      readConfig () {
        this.modelData[this.$route.params.id] = JSON.parse(localStorage.getItem('elements'))
      }
    },
    components: {
      ModelView, XButton, Box, XDialog
    }
  }
</script>

<style type="text/scss" lang="scss">
  .main-view {
    padding-top: 0;
    * {
      font-family: "SimHei", "Lucida Grande", Helvetica, Arial, sans-serif;
    }
    .close-btn {
      width: 100%;
      line-height: 40px;
      font-size: 20px;
      background-color: rgba(0, 0, 0, 0.1);
    }
    .preview-img-wrap {
      width: 100%;
      max-height: 60vh;
      overflow-y: scroll;
      .preview-img {
        width: 100%;
      }
    }
  }
</style>
