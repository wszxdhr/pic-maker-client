<template>
  <div id="app">
    <drawer width="200px"
            :show.sync="showDrawer"
            show-mode="push"
            :drawer-style="{'background-color':'#35495e', width: '200px', height: '100%'}">
      <div slot="drawer">
        <group title="选择模板">
          <cell title="模板1" @click.native="showDrawer = false" :link="{name: 'edit', params: {id: 'xhs-model1'}}" is-link></cell>
          <cell title="模板2" @click.native="showDrawer = false" :link="{name: 'edit', params: {id: 'xhs-model2'}}" is-link></cell>
          <cell title="3x3正方形" is-link></cell>
          <cell title="4x4正方形" is-link></cell>
          <cell title="封面纯文字" @click.native="showDrawer = false" :link="{name: 'edit', params: {id: 'text-square'}}" is-link></cell>
          <cell title="自定义模板" is-link></cell>
        </group>
        <group title="其他">
          <cell title="编辑组件" is-link @click.native="makeConfig"></cell>
          <cell title="新增组件" is-link @click.native="makeConfig"></cell>
          <cell title="浏览作品" is-link @click.native="makeConfig"></cell>
        </group>
      </div>
      <view-box ref="viewBox" body-padding-top="0px" body-padding-bottom="55px">
        <x-header slot="header" :right-options="{showMore: true}" @on-click-more="showMenus = true" v-show="!$route.query.noHeader">
          <span>小芳芳的拼图</span>
          <x-icon @click="showDrawer = true" slot="overwrite-left" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
        </x-header>
        <transition>
          <router-view></router-view>
        </transition>
      </view-box>
    </drawer>
    <scroll-bar :scrollRef="$refs.viewBox"></scroll-bar>
  </div>
</template>

<script>
  import commonHeader from './components/layout/commonHeader.vue'
  import scrollBar from './components/layout/scrollBar/index.vue'
  import { Drawer, Group, Cell, XHeader, ViewBox } from 'vux'
  export default {
    name: 'app',
    data: () => ({
      showDrawer: false
    }),
    methods: {
      makeConfig () {}
    },
    created () {},
    watch: {},
    components: {
      Drawer, Group, Cell, XHeader, commonHeader, ViewBox, scrollBar
    }
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
