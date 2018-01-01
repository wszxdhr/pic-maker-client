<template>
  <div class="cell-component-color">
    <cell>
      <div slot="title">
        <p>{{title}}</p>
        <p slot="after-title" :style="{color: getVal()}">{{getVal()}}</p>
      </div>
      <x-button type="primary" mini @click.native="showPopup = true">颜色选择</x-button>
    </cell>
    <x-dialog :show-mask="false" hide-on-deactivated v-model="showPopup">
      <popup-header @on-click-left="hidePopup(false)" @on-click-right="hidePopup(true)" left-text="取消" right-text="确定" :title="`请选择 ${title} 单位`"></popup-header>
      <color-picker v-model="color"></color-picker>
    </x-dialog>
  </div>
</template>

<script type="text/babel">
  import { Chrome } from 'vue-color'
  import { XInput, XButton, Cell, XDialog, PopupHeader, Flexbox, FlexboxItem } from 'vux'
  import attrMap from '../../../../config/attrMap'
  export default {
    name: 'mainComponentText',
    props: {
      title: {
        default: '未知属性',
        type: String
      },
      element: {
        default: () => ({}),
        type: Object
      }
    },
    data: () => ({
      showPopup: false,
      color: {}
    }),
    components: {
      XInput, XButton, Cell, XDialog, PopupHeader, Flexbox, FlexboxItem, colorPicker: Chrome
    },
    created () {
      let rgba = this.getVal()
      // 只用rgba和hex
      if (rgba.indexOf('#') !== -1) {
        this.color = {
          hex: rgba
        }
      } else {
        this.color = {
          rgba
        }
      }
    },
    methods: {
      getVal () {
        return attrMap[this.element.prop].getter(this.element.ele)
      },
      setVal (val) {
        attrMap[this.element.prop].setter(this.element.ele, val)
      },
      hidePopup (isOk) {
        if (isOk) {
          let rgba = this.color.rgba
          this.setVal(`rgba(${rgba.r},${rgba.g},${rgba.b},${rgba.a})`)
          this.showPopup = false
        } else {
          this.showPopup = false
        }
      }
    }
  }
</script>

<style type="text/scss" lang="scss">
  .cell-component-color {
    .weui-dialog {
      width: 225px;
    }
  }
</style>
