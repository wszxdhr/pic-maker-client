<template>
  <div class="model-view">
    <swipeout>
      <swipeout-item v-for="ele in modelData.elements" :key="ele.id" ref="swipeoutItem" :right-menu-width="210" :sensitivity="15">
        <div slot="right-menu">
          <swipeout-button type="primary" :width="70" @click.native="editItem(ele)" :key="ele.id">编辑</swipeout-button>
          <swipeout-button type="warn" :width="70">删除</swipeout-button>
        </div>

        <!--<div slot="left-menu">-->
          <!--<swipeout-button type="primary">4</swipeout-button>-->
          <!--<swipeout-button type="warn">5</swipeout-button>-->
        <!--</div>-->

        <div slot="content" class="demo-content vux-1px-b" style="min-height: 30px;">
          <model-element :element="ele"></model-element>
        </div>
      </swipeout-item>
    </swipeout>
    <model-edit :element="currentElement" :show="showEdit" @onClose="showEdit = false"></model-edit>
  </div>
</template>

<script type="text/babel">
  import { Swipeout, SwipeoutItem, SwipeoutButton } from 'vux'
  import ModelElement from './modelElement.vue'
  import modelEdit from './modelEdit.vue'
  export default {
    name: 'modelView',
    data: () => ({
      showEdit: false,
      currentElement: {}
    }),
    components: {
      Swipeout, SwipeoutItem, SwipeoutButton, ModelElement, modelEdit
    },
    methods: {
      editItem (ele) {
        this.currentElement = ele
        this.showEdit = true
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

<style type="text/scss" lang="scss"></style>
