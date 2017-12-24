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
            'height': '32.6vw',
            'background-image': 'url(http://desk.fd.zol-img.com.cn/t_s960x600c5/g3/M0A/0F/09/Cg-4WFRplp2IYqiNACQ0TQPPChQAARbPQEM84oAJDRl464.jpg)',
            'background-repeat': 'no-repeat',
            'background-position': 'center',
            'background-size': 'contain'
          }
        },
        'editableProp': ['attr.style.background-image', 'attr.style.height'],
        'childEle': [{
          'tag': 'p',
          'id': 'top-img-text1',
          'innerHTML': '标题1',
          'attr': {
            'style': {
              'position': 'relative',
              'top': '44%',
              'left': '50%',
              'transform': 'translate(-50%, -50%)',
              'text-align': 'center',
              'color': '#000000',
              'text-shadow': '0 0 3.6vw rgba(34, 34, 34, 0.58)',
              'font-size': '4vw',
              'font-weight': 'bold'
            }
          },
          'editableProp': ['innerHTML', 'attr.style.color', 'attr.style.font-size', 'attr.style.top']
        }, {
          'tag': 'p',
          'id': 'top-img-text2',
          'innerHTML': '标题2',
          'attr': {
            'style': {
              'position': 'relative',
              'top': '40%',
              'left': '50%',
              'transform': 'translate(-50%, -50%)',
              'text-align': 'center',
              'color': '#d12a46',
              'text-shadow': '0 0 3.6vw rgba(209,42,70,0.58)',
              'font-size': '4vw',
              'font-weight': 'bold'
            }
          },
          'editableProp': ['innerHTML', 'attr.style.color', 'attr.style.font-size', 'attr.style.top']
        }]
      }, {
        'tag': 'div',
        'id': 'detail-wrap',
        'innerHTML': '',
        'attr': {
          'style': {
            'width': '100%',
            'height': '28.5vw',
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
                'position': 'relative',
                'background-image': 'url(http://desk.fd.zol-img.com.cn/t_s960x600c5/g3/M0A/0F/09/Cg-4WFRplp2IYqiNACQ0TQPPChQAARbPQEM84oAJDRl464.jpg)',
                'background-repeat': 'no-repeat',
                'background-position': 'center',
                'background-size': 'cover'
              }
            },
            'editableProp': ['attr.style.background-image'],
            'childEle': [{
              'tag': 'p',
              'id': 'detail-img1-text',
              'innerHTML': '正常灯光',
              'attr': {
                'style': {
                  'width': '100%',
                  'position': 'absolute',
                  'color': '#555555',
                  'bottom': '0',
                  'text-align': 'center',
                  'font-weight': 'bold',
                  'font-size': '3.6vw',
                  'opacity': '0.8'
                }
              },
              'editableProp': ['innerHTML']
            }]
          }, {
            'tag': 'div',
            'id': 'detail-img2',
            'innerHTML': '',
            'attr': {
              'style': {
                'width': '50%',
                'position': 'relative',
                'background-image': 'url(http://desk.fd.zol-img.com.cn/t_s960x600c5/g3/M0A/0F/09/Cg-4WFRplp2IYqiNACQ0TQPPChQAARbPQEM84oAJDRl464.jpg)',
                'background-repeat': 'no-repeat',
                'background-position': 'center',
                'background-size': 'cover'
              }
            },
            'editableProp': ['attr.style.background-image'],
            'childEle': [{
              'tag': 'p',
              'id': 'detail-img2-text',
              'innerHTML': '冷光灯下',
              'attr': {
                'style': {
                  'width': '100%',
                  'position': 'absolute',
                  'color': '#555555',
                  'bottom': '0',
                  'text-align': 'center',
                  'font-weight': 'bold',
                  'font-size': '3.6vw',
                  'opacity': '0.8'
                }
              },
              'editableProp': ['innerHTML']
            }]
          }
        ]
      }, {
        'tag': 'div',
        'id': 'banner-img',
        'innerHTML': '',
        'attr': {
          'style': {
            'width': '100%',
            'height': '36vw',
            'position': 'relative',
            'background-image': 'url(http://desk.fd.zol-img.com.cn/t_s960x600c5/g3/M0A/0F/09/Cg-4WFRplp2IYqiNACQ0TQPPChQAARbPQEM84oAJDRl464.jpg)',
            'background-repeat': 'no-repeat',
            'background-position': 'center',
            'background-size': 'cover'
          }
        },
        'editableProp': ['attr.style.background-image', 'attr.style.background-position', 'attr.style.background-size', 'attr.style.height'],
        'childEle': [{
          'tag': 'p',
          'id': 'banner-text1',
          'innerHTML': 'By 柠檬树上的小九',
          'attr': {
            'style': {
              'position': 'absolute',
              'left': '5%',
              'top': '50%',
              'transform': 'translateY(-50%)',
              'color': '#ffffff',
              'font-size': '3.2vw',
              'font-weight': 'bold'
            }
          },
          'editableProp': ['innerHTML', 'attr.style.left', 'attr.style.font-size']
        }]
      }, {
        'tag': 'p',
        'id': 'desc1',
        'innerHTML': '梅子红，薄涂日常，厚涂是很有气场的女王色，很有气质，黄皮显白。',
        'attr': {
          'style': {
            'font-size': '3.4vw',
            'font-weight': 'bold',
            'padding': '2vw 3.6vw 3.6vw',
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
            'font-size': '3.6vw',
            'font-weight': 'bold',
            'padding': '0px 3.6vw 3.6vw',
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
            'font-size': '3vw',
            'font-weight': 'bold',
            'padding': '1vw 3.6vw 3.6vw',
            'text-align': 'center'
          }
        },
        'editableProp': ['innerHTML']
      }
    ],
    'width': '{{width || 800}}',
    'height': '{{height || 600}}'
  },
  'xhs-model2': {
    'elements': [
      {
        'tag': 'div',
        'id': 'row1',
        'innerHTML': '',
        'attr': {
          'style': {
            'width': '100%',
            'height': '25vw',
            'display': 'flex'
          }
        },
        'editableProp': [],
        'childEle': [{
          'tag': 'div',
          'id': 'row1-pic1',
          'innerHTML': '',
          'attr': {
            'style': {
              'background-image': 'url(http://desk.fd.zol-img.com.cn/t_s960x600c5/g3/M0A/0F/09/Cg-4WFRplp2IYqiNACQ0TQPPChQAARbPQEM84oAJDRl464.jpg)',
              'background-position': 'center',
              'background-size': 'cover',
              'height': '100%',
              'width': '35%'
            }
          },
          'editableProp': ['attr.style.background-image', 'attr.style.background-size', 'attr.style.background-position']
        }, {
          'tag': 'div',
          'id': 'row1-pic2',
          'innerHTML': '',
          'attr': {
            'style': {
              'background-image': 'url(http://desk.fd.zol-img.com.cn/t_s960x600c5/g3/M0A/0F/09/Cg-4WFRplp2IYqiNACQ0TQPPChQAARbPQEM84oAJDRl464.jpg)',
              'background-position': 'center',
              'background-size': 'cover',
              'height': '100%',
              'width': '30%'
            }
          },
          'editableProp': ['attr.style.background-image', 'attr.style.background-size', 'attr.style.background-position']
        }, {
          'tag': 'div',
          'id': 'row1-pic3',
          'innerHTML': '',
          'attr': {
            'style': {
              'background-image': 'url(http://desk.fd.zol-img.com.cn/t_s960x600c5/g3/M0A/0F/09/Cg-4WFRplp2IYqiNACQ0TQPPChQAARbPQEM84oAJDRl464.jpg)',
              'background-position': 'center',
              'background-size': 'cover',
              'height': '100%',
              'width': '35%'
            }
          },
          'editableProp': ['attr.style.background-image', 'attr.style.background-size', 'attr.style.background-position']
        }]
      },
      {
        'tag': 'div',
        'id': 'row2',
        'innerHTML': '',
        'attr': {
          'style': {
            'width': '100%',
            'height': '25vw',
            'display': 'flex'
          }
        },
        'editableProp': [],
        'childEle': [{
          'tag': 'div',
          'id': 'row2-pic1',
          'innerHTML': '',
          'attr': {
            'style': {
              'background-image': 'url(http://desk.fd.zol-img.com.cn/t_s960x600c5/g3/M0A/0F/09/Cg-4WFRplp2IYqiNACQ0TQPPChQAARbPQEM84oAJDRl464.jpg)',
              'background-position': 'center',
              'background-size': 'cover',
              'height': '100%',
              'width': '35%'
            }
          },
          'editableProp': ['attr.style.background-image', 'attr.style.background-size', 'attr.style.background-position']
        }, {
          'tag': 'div',
          'id': 'row2-pic2',
          'innerHTML': '',
          'attr': {
            'style': {
              'background-image': 'url(http://desk.fd.zol-img.com.cn/t_s960x600c5/g3/M0A/0F/09/Cg-4WFRplp2IYqiNACQ0TQPPChQAARbPQEM84oAJDRl464.jpg)',
              'background-position': 'center',
              'background-size': 'cover',
              'height': '100%',
              'width': '30%'
            }
          },
          'editableProp': ['attr.style.background-image', 'attr.style.background-size', 'attr.style.background-position']
        }, {
          'tag': 'div',
          'id': 'row2-pic3',
          'innerHTML': '',
          'attr': {
            'style': {
              'background-image': 'url(http://desk.fd.zol-img.com.cn/t_s960x600c5/g3/M0A/0F/09/Cg-4WFRplp2IYqiNACQ0TQPPChQAARbPQEM84oAJDRl464.jpg)',
              'background-position': 'center',
              'background-size': 'cover',
              'height': '100%',
              'width': '35%'
            }
          },
          'editableProp': ['attr.style.background-image', 'attr.style.background-size', 'attr.style.background-position']
        }]
      },
      {
        'tag': 'div',
        'id': 'row3',
        'innerHTML': '',
        'attr': {
          'style': {
            'width': '100%',
            'height': '25vw',
            'display': 'flex'
          }
        },
        'editableProp': [],
        'childEle': [{
          'tag': 'div',
          'id': 'row3-pic1',
          'innerHTML': '',
          'attr': {
            'style': {
              'background-image': 'url(http://desk.fd.zol-img.com.cn/t_s960x600c5/g3/M0A/0F/09/Cg-4WFRplp2IYqiNACQ0TQPPChQAARbPQEM84oAJDRl464.jpg)',
              'background-position': 'center',
              'background-size': 'cover',
              'height': '100%',
              'width': '35%'
            }
          },
          'editableProp': ['attr.style.background-image', 'attr.style.background-size', 'attr.style.background-position']
        }, {
          'tag': 'div',
          'id': 'row3-pic2',
          'innerHTML': '',
          'attr': {
            'style': {
              'background-image': 'url(http://desk.fd.zol-img.com.cn/t_s960x600c5/g3/M0A/0F/09/Cg-4WFRplp2IYqiNACQ0TQPPChQAARbPQEM84oAJDRl464.jpg)',
              'background-position': 'center',
              'background-size': 'cover',
              'height': '100%',
              'width': '30%'
            }
          },
          'editableProp': ['attr.style.background-image', 'attr.style.background-size', 'attr.style.background-position']
        }, {
          'tag': 'div',
          'id': 'row3-pic3',
          'innerHTML': '',
          'attr': {
            'style': {
              'background-image': 'url(http://desk.fd.zol-img.com.cn/t_s960x600c5/g3/M0A/0F/09/Cg-4WFRplp2IYqiNACQ0TQPPChQAARbPQEM84oAJDRl464.jpg)',
              'background-position': 'center',
              'background-size': 'cover',
              'height': '100%',
              'width': '35%'
            }
          },
          'editableProp': ['attr.style.background-image', 'attr.style.background-size', 'attr.style.background-position']
        }]
      },
      {
        'tag': 'div',
        'id': 'row4',
        'innerHTML': '',
        'attr': {
          'style': {
            'width': '100%',
            'height': '25vw',
            'display': 'flex'
          }
        },
        'editableProp': [],
        'childEle': [{
          'tag': 'div',
          'id': 'row4-pic1',
          'innerHTML': '',
          'attr': {
            'style': {
              'background-image': 'url(http://desk.fd.zol-img.com.cn/t_s960x600c5/g3/M0A/0F/09/Cg-4WFRplp2IYqiNACQ0TQPPChQAARbPQEM84oAJDRl464.jpg)',
              'background-position': 'center',
              'background-size': 'cover',
              'height': '100%',
              'width': '35%'
            }
          },
          'editableProp': ['attr.style.background-image', 'attr.style.background-size', 'attr.style.background-position']
        }, {
          'tag': 'div',
          'id': 'row4-pic2',
          'innerHTML': '',
          'attr': {
            'style': {
              'background-image': 'url(http://desk.fd.zol-img.com.cn/t_s960x600c5/g3/M0A/0F/09/Cg-4WFRplp2IYqiNACQ0TQPPChQAARbPQEM84oAJDRl464.jpg)',
              'background-position': 'center',
              'background-size': 'cover',
              'height': '100%',
              'width': '30%'
            }
          },
          'editableProp': ['attr.style.background-image', 'attr.style.background-size', 'attr.style.background-position']
        }, {
          'tag': 'div',
          'id': 'row4-pic3',
          'innerHTML': '',
          'attr': {
            'style': {
              'background-image': 'url(http://desk.fd.zol-img.com.cn/t_s960x600c5/g3/M0A/0F/09/Cg-4WFRplp2IYqiNACQ0TQPPChQAARbPQEM84oAJDRl464.jpg)',
              'background-position': 'center',
              'background-size': 'cover',
              'height': '100%',
              'width': '35%'
            }
          },
          'editableProp': ['attr.style.background-image', 'attr.style.background-size', 'attr.style.background-position']
        }]
      }
    ]
  }
}
