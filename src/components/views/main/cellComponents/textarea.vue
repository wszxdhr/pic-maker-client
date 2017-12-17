<script type="text/babel">
  import { XTextarea } from 'vux'
  import attrMap from '../../../../config/attrMap'
  export default {
    name: 'mainComponentTextarea',
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
      return createElement(XTextarea, {
        props: {
          title: this.title,
          value: currentVal,
          rows: 5
        },
        on: {
          'on-change' (val) {
            console.log('val', val)
            currentVal = val
            attrMap[element.prop].setter(element.ele, val)
            protoVal = currentVal
          }
        }
      })
    }
  }
</script>

<style type="text/scss" lang="scss"></style>
