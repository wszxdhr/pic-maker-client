<template>
  <x-dialog :show.sync="showSelf" class="model-edit" hide-on-blur>
    <group>
      <component :is="getComponentName(prop)" :title="getCellTitle(prop)" :element="prop" v-for="prop in editableProp" :key="prop.ele.id + prop.prop"></component>
    </group>
    <div class="footer" @click="showSelf = false">
      <span class="vux-close"></span>
    </div>
  </x-dialog>
</template>

<script type="text/babel">
  import config from '../../../config'
  import { XDialog, Group, Cell } from 'vux'
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
      textMulti: TextArea, upload: Upload, textInput: TextInput, XDialog, Group, Cell
    },
    methods: {
      getCellTitle ({prop}) {
        return attrMap[prop].name
      },
      getComponentName ({prop}) {
        return attrMap[prop].component
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
        console.log('element changed', val)
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
  }
</style>
