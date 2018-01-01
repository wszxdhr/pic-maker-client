<template>
  <div class="model-list">
    <group title="公共组件">
      <cell @click.native="$emit('selected', model._id)" v-if="model.type === 'common'" :key="model._id" :title="model.name" :link="computeLink(model)" v-for="model in models"></cell>
    </group>
    <group title="非公共组件">
      <cell @click.native="$emit('selected', model._id)" v-if="model.type === 'product'" :key="model._id" :title="model.name" :link="computeLink(model)" v-for="model in models"></cell>
    </group>
    <group title="其他" v-if="this.$route.name === 'cloneModel'">
      <cell @click.native="$emit('selected', model._id)" title="新建空白组件" is-link :link="computeLink({_id: '5a49f337f97c5d01898670d4'})"></cell>
    </group>
  </div>
</template>

<script type="text/babel">
  import { Group, Cell } from 'vux'
  export default {
    name: 'modelList',
    components: {
      Group, Cell
    },
    data: () => ({
      models: []
    }),
    created () {
      this.$api.getModels().then(res => {
        this.models = res.data.data
      })
    },
    methods: {
      computeLink (model) {
        switch (this.$route.name) {
          case 'viewModels': return {name: 'edit', params: {id: model._id}}
          case 'cloneModel': return {name: 'edit', params: {id: model._id}, query: {clone: true}}
          default: return ''
        }
      }
    }
  }
</script>

<style type="text/scss" lang="scss"></style>
