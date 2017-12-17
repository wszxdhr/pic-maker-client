import axios from './interceptor'

export default {
  makePicture: (conf) => axios.post('http://screenshot.anymelon.com/puzzle', {
    elements: conf
  })
}
