<template>
  <drawer width="200px"
          :show.sync="showDrawer"
          show-mode="push"
          :drawer-style="{'background-color':'#35495e', width: '200px', height: '100%'}">
    <div slot="drawer">
      <group title="选择模板">
        <cell title="模板1" is-link @click.native="makeConfig"></cell>
        <cell title="3x3正方形" is-link></cell>
        <cell title="4x4正方形" is-link></cell>
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
        <main-view></main-view>
      </transition>
    </view-box>
  </drawer>
</template>

<script>
  import MainView from '../main'
  import commonHeader from '../../../components/layout/commonHeader.vue'
  import { Drawer, Group, Cell, XHeader, ViewBox } from 'vux'
  export default {
    data: () => ({
      showDrawer: false
    }),
    components: {
      MainView, Drawer, Group, Cell, XHeader, commonHeader, ViewBox
    }
  }
</script>