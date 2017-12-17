export default {
  'style.background-image': {
    getter (ele) {
      let regLeft = /^url\(/
      let regRight = /\)$/
      return ele.attr.style['background-image'].replace(regLeft, '').replace(regRight, '')
    },
    setter (ele, val) {
      ele.attr.style['background-image'] = `url(${val})`
    },
    name: '图片链接',
    component: 'upload'
  },
  'attr.src': {
    getter (ele) {
      return ele.attr.src
    },
    setter (ele, val) {
      ele.attr.src = val
    },
    name: '图片链接',
    component: 'upload'
  },
  'attr.style.height': {
    getter (ele) {
      return ele.attr.style.height
    },
    setter (ele, val) {
      ele.attr.style.height = val
    },
    name: '高度',
    component: 'textInput'
  },
  'innerHTML': {
    getter (ele) {
      return ele.innerHTML
    },
    setter (ele, val) {
      ele.innerHTML = val
    },
    name: '文字',
    component: 'textMulti'
  }
}
