<template>
  <div class="model-view">
    <div @click="editItem(ele)" :key="ele.id" v-for="ele in modelData.elements">
      <model-element :element="ele"></model-element>
    </div>
    <model-edit :element="currentElement" :show="showEdit" @onClose="showEdit = false"></model-edit>
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
      currentElement: {}
    }),
    components: {
      Swipeout, SwipeoutItem, SwipeoutButton, ModelElement, modelEdit, XButton
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

<style type="text/scss" lang="scss">
  .model-view {
    .add-btn {
      display: block;
      width: 100%;
      height: 50%;
      margin-top: 0!important;
      border-radius: 0;

    }
  }
</style>
