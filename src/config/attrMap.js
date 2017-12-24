export default {
  'attr.style.background-image': {
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
  'attr.style.background-size': {
    getter (ele) {
      return ele.attr.style['background-size']
    },
    setter (ele, val) {
      ele.attr.style['background-size'] = val
    },
    name: '背景图尺寸',
    component: 'textInput'
  },
  'attr.style.background-position': {
    getter (ele) {
      return ele.attr.style['background-position']
    },
    setter (ele, val) {
      ele.attr.style['background-position'] = val
    },
    name: '背景图位置',
    component: 'textInput'
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
  'attr.style.color': {
    getter (ele) {
      return ele.attr.style.color
    },
    setter (ele, val) {
      ele.attr.style.color = val
    },
    name: '字体颜色',
    component: 'textInput'
  },
  'attr.style.font-size': {
    getter (ele) {
      return ele.attr.style['font-size']
    },
    setter (ele, val) {
      ele.attr.style['font-size'] = val
    },
    name: '字体大小',
    component: 'textInput'
  },
  'attr.style.top': {
    getter (ele) {
      return ele.attr.style.top
    },
    setter (ele, val) {
      ele.attr.style.top = val
    },
    name: '上边距',
    component: 'textInput'
  },
  'attr.style.left': {
    getter (ele) {
      return ele.attr.style.left
    },
    setter (ele, val) {
      ele.attr.style.left = val
    },
    name: '左边距',
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
