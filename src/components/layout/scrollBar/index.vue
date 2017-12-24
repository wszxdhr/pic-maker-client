<template>
  <div class="scroll-bar" @touchstart="scrollStart" @touchmove="scrollMove" @touchend="scrollEnd"></div>
</template>

<script type="text/babel">
  export default {
    name: 'scrollBar',
    data: () => ({
      scrollDom: null,
      scrollStartY: 0,
      scrollStartTop: 0
    }),
    props: {
      scrollRef: {}
    },
    created () {
      this.scrollDom = document.getElementById('vux_view_box_body')
      let timerCnt = 0
      let timer = setInterval(() => {
        timerCnt++
        if (this.scrollDom || timerCnt >= 2000) {
          clearInterval(timer)
        } else {
          this.scrollDom = document.getElementById('vux_view_box_body')
        }
      }, 300)
    },
    methods: {
      scrollStart (evt) {
        this.scrollStartTop = this.scrollDom.scrollTop
        this.scrollStartY = evt.targetTouches[0].clientY
      },
      scrollMove (evt) {
        this.scrollDom.scrollTop = this.scrollDom.scrollTop - (evt.targetTouches[0].clientY - this.scrollStartY) / 2
      },
      scrollEnd (evt) {
      }
    },
    watch: {
      scrollRef (val) {
        console.log('change')
      }
    }
  }
</script>

<style type="text/scss" lang="scss">
  .scroll-bar {
    position: fixed;
    top: 46px;
    bottom: 0;
    left: 0;
    width: 40px;
    background-color: transparent;
  }
</style>
