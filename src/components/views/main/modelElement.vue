<script type="text/babel">
  import Self from './modelElement.vue'
  export default {
    name: 'modelElement',
    render (createElement) {
      let htmlFilter = (str) => str.replace(/\\n/g, '</br>').replace(/\s/g, '&nbsp;')
      let childList = []
      let attrs = this.element.attr || {}
      console.log(attrs)
      let opts = {
        attrs,
        style: attrs.style || {},
        class: this.element.className || [],
        domProps: {}
      }
      if (this.element.childEle) {
        for (let ele of this.element.childEle) {
          childList.push(createElement(Self, {
            props: {
              element: ele
            }
          }))
        }
      } else {
        opts.domProps.innerHTML = htmlFilter(this.element.innerHTML || '')
      }
      return createElement(this.element.tag, opts, childList)
    },
    props: {
      element: {
        type: Object,
        default: () => ({})
      }
    },
    data: () => ({})
  }
</script>

<style type="text/scss" lang="scss"></style>
