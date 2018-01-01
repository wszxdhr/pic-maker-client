<script type="text/babel">
  import { Cell, XButton, Box } from 'vux'
  import uploadFunc from '@/components/common/modules/upload'
  import attrMap from '../../../../config/attrMap'
  export default {
    name: 'mainComponentUpload',
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
      return createElement('div', {}, [
        createElement(Cell, {
          props: {
            title: this.title,
            primary: 'content'
          },
          'class': ['main-component-upload'],
          on: {
            'on-change': (val) => {
              currentVal = val
            }
          }
        }, [
          createElement('div', {
            attrs: {
              style: `background-image: ${currentVal}; background-position: center; background-size: contain; background-repeat: no-repeat;`
            },
            slot: 'icon',
            'class': ['preview-icon']
          }),
          createElement('p', {
            slot: 'inline-desc',
            domProps: {
              innerHTML: currentVal ? '当前有图，请覆盖' : '当前为空，请上传'
            }
          }),
          createElement('div', {
            'class': ['upload-btn weui-btn weui-btn_mini weui-btn_primary'],
            slot: 'default'
          }, [
            createElement('input', {
              props: {
                type: 'primary',
                mini: true
              },
              'class': [
                'upload-input'
              ],
              attrs: {
                type: 'file'
              },
              on: {
                async change (val) {
                  let files = val.target.files
                  let file = files[0]
                  let picUrl = await uploadFunc(file)
                  console.log('picUrl = ', picUrl)
                  if (picUrl) {
                    attrMap[element.prop].setter(element.ele, picUrl)
                  }
                }
              }
            })
          ])
        ]),
        createElement(Box, {
          props: {
            gap: '10px 10px'
          }
        }, [
          createElement(XButton, {
            props: {
              type: 'warn'
            },
            domProps: {
              innerHTML: '删除背景图'
            }
          })
        ])
      ])
    }
  }
</script>

<style type="text/scss" lang="scss">
  .main-component-upload {
    .upload-btn {
      position: relative;
      border-width: 0;
      outline: 0;
      display: inline-block;
      width: auto;
      align-items: flex-start;
      &:before {
        content: '上传'
      }
      .upload-input {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0;
      }
      &:after {
        pointer-events: none;
      }
    }
    .preview-icon {
      width: 60px;
      height: 60px;
    }
  }
</style>
