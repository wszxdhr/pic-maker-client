<script type="text/babel">
  import { XInput, XButton } from 'vux'
  import attrMap from '../../../../config/attrMap'
  export default {
    name: 'mainComponentText',
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
    render (createElement) {
      let element = this.element
      let getVal = () => attrMap[this.element.prop].getter(this.element.ele)
      let currentVal = getVal()
      let protoVal = currentVal
      console.log(protoVal)
      return createElement(XInput, {
        props: {
          title: this.title,
          value: currentVal
        },
        on: {
          'on-change': (val) => {
            currentVal = val
          }
        }
      }, [
        createElement(XButton, {
          props: {
            type: 'primary',
            mini: true
          },
          slot: 'right',
          domProps: {
            innerHTML: '保存'
          },
          nativeOn: {
            click (val) {
              attrMap[element.prop].setter(element.ele, currentVal)
              protoVal = currentVal
            }
          }
        })
      ])
    }
  }
</script>

<style type="text/scss" lang="scss"></style>
