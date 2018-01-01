<template>
  <cell :title="title">
    <div>
      <inline-x-number v-model="currentVal" fillable width="60px" style="vertical-align: middle"></inline-x-number>
      <x-button @click.native="showUnitSelector" type="primary" mini style="vertical-align: middle;">
        {{getUnit()}}
      </x-button>
      <popup :show-mask="false" hide-on-deactivated v-model="showUnitSelect">
        <popup-header @on-click-left="hidePopup(false)" @on-click-right="hidePopup(true)" left-text="取消" right-text="确定" :title="`请选择 ${title} 单位`"></popup-header>
        <picker :data="[unitList]" v-model="unitSelect"></picker>
      </popup>
    </div>
  </cell>
</template>

<script type="text/babel">
  import { Cell, InlineXNumber, XButton, Popup, PopupHeader, Picker } from 'vux'
  import attrMap from '../../../../config/attrMap'
  export default {
    name: 'mainComponentNumber',
    components: {Cell, InlineXNumber, XButton, Popup, PopupHeader, Picker},
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
      currentVal: 0,
      showUnitSelect: false,
      unitSelect: [],
      unitList: ['px', 'vw', 'vh', '%', 'rem', 'em']
    }),
    methods: {
      valFilter (val) {
        for (let unitItem of this.unitList) {
          if (new RegExp(`${unitItem}$`).test(val)) {
            return parseFloat(val.replace(new RegExp(`${unitItem}$`), ''))
          }
        }
      },
      getVal () {
        return attrMap[this.element.prop].getter(this.element.ele)
      },
      setVal (val, unit) {
        attrMap[this.element.prop].setter(this.element.ele, val + (unit || this.getUnit()))
      },
      getUnit () {
        for (let unitItem of this.unitList) {
          if (new RegExp(`${unitItem}$`).test(this.getVal())) {
            return unitItem
          }
        }
      },
      showUnitSelector () {
        this.unitSelect[0] = this.getUnit()
        this.showUnitSelect = true
      },
      hidePopup (isOk) {
        if (isOk) {
          this.setVal(this.currentVal, this.unitSelect[0])
          this.showUnitSelect = false
        } else {
          this.showUnitSelect = false
        }
      }
    },
    created () {
      this.unitSelect[0] = this.getUnit()
      this.currentVal = this.valFilter(this.getVal())
    },
    watch: {
      currentVal (val, oldVal) {
        if (val !== oldVal) {
          this.setVal(val)
        }
      }
    }
  }
</script>

<style type="text/scss" lang="scss"></style>
