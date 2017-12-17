export default {
  'xhs-model1': {
    'elements': [
      {
        'tag': 'div',
        'id': 'top-img',
        'innerHTML': '',
        'attr': {
          'style': {
            'width': '100%',
            'height': '50vw',
            'background-image': 'url(https://www.google.com.hk/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png)',
            'background-repeat': 'no-repeat',
            'background-position': 'center',
            'background-size': 'contain'
          }
        },
        'editableProp': ['style.background-image', 'attr.style.height']
      }, {
        'tag': 'div',
        'id': 'detail-wrap',
        'innerHTML': '456',
        'attr': {
          'style': {
            'width': '100%',
            'height': '60vw',
            'display': 'flex',
            'background-color': '#fff'
          }
        },
        'editableProp': ['attr.style.height'],
        'childEle': [
          {
            'tag': 'div',
            'id': 'detail-img1',
            'innerHTML': '',
            'attr': {
              'style': {
                'width': '50%',
                'background-image': 'url(https://www.google.com.hk/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png)',
                'background-repeat': 'no-repeat',
                'background-position': 'center',
                'background-size': 'cover'
              }
            },
            'editableProp': ['style.background-image']
          }, {
            'tag': 'div',
            'id': 'detail-img2',
            'innerHTML': '',
            'attr': {
              'style': {
                'width': '50%',
                'background-image': 'url(https://www.google.com.hk/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png)',
                'background-repeat': 'no-repeat',
                'background-position': 'center',
                'background-size': 'cover'
              }
            },
            'editableProp': ['style.background-image']
          }
        ]
      }, {
        'tag': 'div',
        'id': 'banner-img',
        'innerHTML': '',
        'attr': {
          'style': {
            'width': '100%',
            'height': '50vw',
            'background-image': 'url(https://www.google.com.hk/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png)',
            'background-repeat': 'no-repeat',
            'background-position': 'center',
            'background-size': 'cover'
          }
        },
        'editableProp': ['style.background-image', 'attr.style.height']
      }, {
        'tag': 'p',
        'id': 'desc1',
        'innerHTML': '梅子红，薄涂日常，厚涂是很有气场的女王色，很有气质，黄皮显白。',
        'attr': {
          'style': {
            'font-size': '14px',
            'font-weight': 'bold',
            'padding': '12px 20px 20px',
            'line-height': '1.4'
          }
        },
        'editableProp': ['innerHTML']
      }, {
        'tag': 'p',
        'id': 'desc2',
        'innerHTML': '唇色正常偏深，无打底无遮瑕，厚擦，无滤镜试色</br>显色度：⭐️⭐️⭐️⭐</br>滋润度：⭐️⭐️（丝绒唇釉）</br>持久度：⭐️⭐️⭐️⭐️⭐️</br>易卸度：⭐️',
        'attr': {
          'style': {
            'font-size': '16px',
            'font-weight': 'bold',
            'padding': '0px 20px 20px',
            'color': '#f42757',
            'line-height': '1.4'
          }
        },
        'editableProp': ['innerHTML']
      }, {
        'tag': 'p',
        'id': 'water-mark',
        'innerHTML': '[图文均来自柠檬树上的小九，严禁各种形式的转载盗图，侵权必究！]',
        'attr': {
          'style': {
            'color': '#898989',
            'font-size': '12px',
            'font-weight': 'bold',
            'padding': '8px 20px 20px;',
            'text-align': 'center'
          }
        },
        'editableProp': ['innerHTML']
      }
    ],
    'width': '{{width || 800}}',
    'height': '{{height || 600}}'
  }
}