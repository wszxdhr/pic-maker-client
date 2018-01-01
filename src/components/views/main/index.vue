<template>
  <div class="main-view">
    <model-view @addElement="changeAddIndex" :model-data="modelData"></model-view>
    <box gap="10px 10px" class="bottom-btn-wrap">
      <x-button :gradients="['#1D62F0', '#19D5FD']" @click.native="saveConfig">{{$route.query.hasOwnProperty('clone') ? '新建' : '保存'}}</x-button>
      <x-button :gradients="['#A644FF', '#FC5BC4']" @click.native="makePicture">生成图片</x-button>
    </box>
    <x-dialog :show.sync="showPicture">
      <div class="preview-img-wrap" v-if="pictureUrl">
        <img class="preview-img" :src="pictureUrl" alt=""/>
      </div>
      <p v-else>加载中，稍等哈</p>
      <div class="close-btn" @click="showPicture = false">×</div>
    </x-dialog>
    <x-dialog :show.sync="showAddDialog">
      <model-list @selected="addEle"></model-list>
      <div class="close-btn" @click="showAddDialog = false">×</div>
    </x-dialog>
  </div>
</template>

<script type="text/babel">
  import ModelView from './model.vue'
  import modelList from '../modelList'
  import { XButton, Box, XDialog, Popup } from 'vux'
  export default {
    name: 'mainView',
    data: () => ({
      modelData: {},
      showPicture: false,
      showAddDialog: false,
      pictureUrl: '',
      addIndex: -1
    }),
    created () {
      this.$api.getModel({id: this.$route.params.id}).then(res => {
        this.modelData = res.data.data[0]
      })
    },
    methods: {
      makeConfig () {
        this.$vux.confirm.prompt('请稍等...', {
          onCancel () {},
          onConfirm () {}
        })
        this.$vux.confirm.setInputValue(this.getCurrentConfig())
      },
      getCurrentConfig () {
        return this.modelData
      },
      makePicture () {
        this.pictureUrl = ''
        this.showPicture = true
        this.$api.makePicture(this.getCurrentConfig()).then(res => {
          this.pictureUrl = res.data.host + res.data.filename
        })
      },
      async saveConfig () {
        if (this.$route.query.hasOwnProperty('clone')) {
          let name = await new Promise((resolve) => {
            this.$vux.confirm.prompt('请输入新模板的名字', {
              title: '模板名称：',
              onCancel () {
                resolve(false)
              },
              onConfirm (name) {
                resolve(name)
              }
            })
          })
          if (name) {
            this.modelData.name = name
            delete this.modelData._id
            this.$api.addModel({content: this.modelData}).then(res => {
              if (!res.data.status) {
                this.$vux.toast.show({
                  text: '添加成功',
                  type: 'success'
                })
              }
            })
          }
        } else {
          this.$api.saveModel({content: this.modelData, id: this.$route.params.id}).then(res => {
            if (!res.data.status) {
              this.$vux.toast.show({
                text: '保存成功',
                type: 'success'
              })
            }
          })
        }
      },
      addEle (id) {
        this.$api.getModel({id}).then(res => {
          if (!res.data.status) {
            let index = this.addIndex
            for (let ele of res.data.data[0].elements) {
              this.modelData.elements.splice(++index, 0, ele)
            }
            this.showAddDialog = false
          }
        })
      },
      changeAddIndex (idx) {
        this.addIndex = idx
        this.showAddDialog = true
      }
    },
    components: {
      ModelView, XButton, Box, XDialog, modelList, Popup
    },
    watch: {
      modelData: {
        deep: true,
        handler (val) {
          console.log(val)
          let idx = 0
          for (let ele of val.elements) {
            ele.key = `key-${new Date().valueOf()}-${idx++}`
          }
        }
      }
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
