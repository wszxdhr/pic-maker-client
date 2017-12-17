<template>
  <div id="app">
    <drawer width="200px"
            :show.sync="showDrawer"
            show-mode="push"
            :drawer-style="{'background-color':'#35495e', width: '200px', height: '100%'}">
      <div slot="drawer">
        <group title="导出">
          <cell title="导出数据" is-link @click.native="makeConfig"></cell>
          <cell title="生成图片" is-link></cell>
        </group>
      </div>
      <view-box ref="viewBox" body-padding-top="0px" body-padding-bottom="55px">
        <x-header slot="header" :right-options="{showMore: true}" @on-click-more="showMenus = true">
          <span>小芳芳的拼图</span>
          <x-icon @click="showDrawer = true" slot="overwrite-left" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
        </x-header>
        <transition>
          <router-view class="router-view"></router-view>
        </transition>
      </view-box>
    </drawer>
  </div>
</template>

<script>
import { Drawer, Group, Cell, XHeader, ViewBox } from 'vux'
import commonHeader from './components/layout/commonHeader.vue'
export default {
  name: 'app',
  data: () => ({
    showDrawer: false
  }),
  methods: {
    makeConfig () {}
  },
  components: {
    Drawer, Group, Cell, XHeader, commonHeader, ViewBox
  },
  watch: {}
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body, html, #app {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

body {
  background-color: #fbf9fe;
}

.router-view {
  width: 100%;
  top: 46px;
}
</style>
