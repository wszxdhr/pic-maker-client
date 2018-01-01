<template>
  <div class="model-view">
    <div :class="['plus-btn', {show: showAddBtn}]" @click="addElement(-1)">
      <x-icon type="ios-plus" size="24"></x-icon>
    </div>
    <div class="model-element-wrap" :key="ele.key" v-for="(ele, $index) in modelData.elements">
      <model-element @click.native="editItem(ele, $index)" :element="ele"></model-element>
      <div :class="['plus-btn', {show: showAddBtn}]" @click="addElement($index)">
        <x-icon type="ios-plus" size="24"></x-icon>
      </div>
    </div>
    <model-edit @delete="deleteEle" :element="currentElement" :show="showEdit" @onClose="showEdit = false"></model-edit>
  </div>
</template>

<script type="text/babel">
  import { Swipeout, SwipeoutItem, SwipeoutButton, XButton } from 'vux'
  import ModelElement from './modelElement.vue'
  import modelEdit from './modelEdit.vue'
  export default {
    name: 'modelView',
    data: () => ({
      showEdit: false,
      currentElement: {},
      currentIndex: -1,
      showAddBtn: false
    }),
    components: {
      Swipeout, SwipeoutItem, SwipeoutButton, ModelElement, modelEdit, XButton
    },
    created () {
      this.$bus.$on('showAddBtn', (isShow) => {
        this.showAddBtn = isShow
      })
    },
    methods: {
      editItem (ele, idx) {
        this.currentElement = ele
        this.currentIndex = idx
        this.showEdit = true
      },
      addElement (idx) {
        this.$emit('addElement', idx)
      },
      deleteEle () {
        this.modelData.elements.splice(this.currentIndex, 1)
      }
    },
    props: {
      modelData: {
        type: Object,
        default: () => ({})
      }
    },
    watch: {
      showEdit (val) {
      }
    }
  }
</script>

<style type="text/scss" lang="scss">
  .model-view {
    .add-btn {
      display: block;
      width: 100%;
      height: 50%;
      margin-top: 0!important;
      border-radius: 0;

    }
    .model-element-wrap {
      background-color: #ffffff;
    }
    .plus-btn {
      text-align: center;
      padding: 5px;
      transition: height .5s, padding .5s;
      height: 30px;
      overflow: hidden;
      .vux-x-icon {
        fill: #10AEFF;
      }
      &:not(.show) {
        height: 0;
        padding: 0;
        pointer-events: none;
      }
    }
  }
</style>
