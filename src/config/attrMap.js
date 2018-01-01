export default {
  'attr.style.background-image': {
    getter (ele) {
      let regLeft = /^url\("/
      let regRight = /"\)$/
      return ele.attr.style['background-image'].replace(regLeft, '').replace(regRight, '')
    },
    setter (ele, val) {
      ele.attr.style['background-image'] = `url("${val}")`
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
  'padding': {
    getter (ele) {
      return ele.attr.style.padding
    },
    setter (ele, val) {
      ele.attr.style.padding = val
    },
    name: '内边距',
    component: 'number'
  },
  'attr.style.height': {
    getter (ele) {
      return ele.attr.style.height
    },
    setter (ele, val) {
      ele.attr.style.height = val
    },
    name: '高度',
    component: 'number'
  },
  'attr.style.color': {
    getter (ele) {
      return ele.attr.style.color
    },
    setter (ele, val) {
      ele.attr.style.color = val
    },
    name: '字体颜色',
    component: 'color'
  },
  'attr.style.text-shadow.color': {
    getter (ele) {
      let protoText = ele.attr.style['text-shadow']
      let colorReg1 = /rgba\([\s\S]*?\)/
      let colorReg2 = /#[a-zA-Z0-9]{6}/
      if (colorReg1.test(protoText)) {
        return protoText.match(colorReg1)[0]
      }
      if (colorReg2.test(protoText)) {
        return protoText.match(colorReg2)[0]
      }
    },
    setter (ele, val) {
      let protoText = ele.attr.style['text-shadow']
      let colorReg1 = /rgba\([\s\S]*?\)/
      let colorReg2 = /#[a-zA-Z0-9]{6}/
      if (colorReg1.test(protoText)) {
        ele.attr.style['text-shadow'] = protoText.replace(colorReg1, val)
      }
      if (colorReg2.test(protoText)) {
        ele.attr.style['text-shadow'] = protoText.replace(colorReg1, val)
      }
    },
    name: '阴影颜色',
    component: 'color'
  },
  'attr.style.font-size': {
    getter (ele) {
      return ele.attr.style['font-size']
    },
    setter (ele, val) {
      ele.attr.style['font-size'] = val
    },
    name: '字体大小',
    component: 'number'
  },
  'attr.style.top': {
    getter (ele) {
      return ele.attr.style.top
    },
    setter (ele, val) {
      ele.attr.style.top = val
    },
    name: '上边距',
    component: 'number'
  },
  'attr.style.left': {
    getter (ele) {
      return ele.attr.style.left
    },
    setter (ele, val) {
      ele.attr.style.left = val
    },
    name: '左边距',
    component: 'number'
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
