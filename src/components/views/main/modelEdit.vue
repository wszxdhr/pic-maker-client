<template>
  <popup :popup-style="{width: '100%'}" hide-on-deactivated :show-mask="false" position="right" v-model="showSelf" class="model-edit">
    <div class="flex-view">
      <div class="edit-element">
        <model-element :key="element.key" :element="element"></model-element>
      </div>
      <group class="edit-main">
        <component :is="getComponentName(prop)" :title="getCellTitle(prop)" :element="prop" v-for="prop in editableProp" :key="prop.ele.id + prop.prop"></component>
      </group>
      <box gap="10px 10px" class="btn-box">
        <flexbox>
          <flexbox-item>
            <x-button type="warn" @click.native="deleteItem()">
              删除
            </x-button>
          </flexbox-item>
          <flexbox-item>
            <x-button type="primary" @click.native="showSelf = false">
              关闭
            </x-button>
          </flexbox-item>
        </flexbox>
      </box>
    </div>
  </popup>
</template>

<script type="text/babel">
  import config from '../../../config'
  import modelElement from './modelElement'
  import { Popup, Group, Cell, XButton, Box, Flexbox, FlexboxItem } from 'vux'
  import TextInput from './cellComponents/text.vue'
  import Upload from './cellComponents/upload.vue'
  import TextArea from './cellComponents/textarea.vue'
  let attrMap = config.attrMap
  export default {
    name: 'modelEdit',
    props: {
      element: {
        type: Object,
        default: () => ({})
      },
      show: {
        default: false,
        type: Boolean
      }
    },
    data: () => ({
      showSelf: false
    }),
    components: {
      textMulti: TextArea, upload: Upload, textInput: TextInput, Popup, Group, Cell, XButton, Box, modelElement, Flexbox, FlexboxItem
    },
    methods: {
      getCellTitle ({prop}) {
        return attrMap[prop].name
      },
      getComponentName ({prop}) {
        return attrMap[prop].component
      },
      deleteItem () {
        let that = this
        this.$vux.confirm.show({
          title: '确认删除吗？',
          onCancel () {},
          onConfirm () {
            that.$emit('delete', that.element)
            that.showSelf = false
          }
        })
      }
    },
    watch: {
      showSelf (val) {
        if (!val) {
          this.$emit('onClose')
        }
      },
      show (val) {
        this.showSelf = val
      },
      element (val) {
      }
    },
    computed: {
      editableProp () {
        let getEditableProp = (editablePropEle) => {
          let result = []
          if (editablePropEle.editableProp) {
            for (let p in editablePropEle.editableProp) {
              let prop = editablePropEle.editableProp[p]
              result.push({
                ele: editablePropEle,
                prop
              })
            }
          }
          if (editablePropEle.childEle) {
            for (let ele in editablePropEle.childEle) {
              let element = editablePropEle.childEle[ele]
              result = result.concat(getEditableProp(element))
            }
          }
          return result
        }
        return getEditableProp(this.element)
      }
    }
  }
</script>

<style type="text/scss" lang="scss">
  .model-edit {
    .edit-element {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.35);
      background-color: #ffffff;
      max-height: 30vh;
      overflow-y: scroll;
    }
    .flex-view {
      display: flex;
      flex-direction: column;
      height: 100vh;
    }
    .edit-main {
      flex: 1;
      overflow-y: scroll;
    }
    .btn-box {
      /*box-shadow: 0 0 10px rgba(0, 0, 0, 0.35);*/
    }
  }
</style>
