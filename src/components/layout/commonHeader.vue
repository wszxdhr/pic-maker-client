<template>
  <div class="common-drawer">
    <drawer width="200px"
            height="100%"
            :show.sync="showDrawer"
            show-mode="push"
            :drawer-style="{'background-color':'#35495e', width: '200px', height: '100%'}">
      <div slot="drawer">
        <group title="D">
          <cell title="DD"></cell>
        </group>
      </div>
      <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">
        <span>小芳芳的拼图</span>
        <x-icon @click="showDrawer = true" slot="overwrite-left" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
      </x-header>
    </drawer>
  </div>
</template>

<script type="text/babel">
  import { Drawer, Group, Cell, XHeader } from 'vux'
  export default {
    name: 'commonDrawer',
    data: () => ({
      showDrawer: false
    }),
    props: {
      show: {
        type: Boolean,
        default: false
      }
    },
    components: {
      Drawer, Group, Cell, XHeader
    },
    watch: {
      show (val) {
        console.log('show changed')
        this.showDrawer = val
      },
      showDrawer (val) {
        console.log('show drawer changed')
        this.$emit('onChange', val)
      }
    }
  }
</script>

<style type="text/scss" lang="scss">
  .common-drawer {
    position: fixed;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
  }
</style>
