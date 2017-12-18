import axios from './interceptor'

export default {
  makePicture: (conf) => axios.post('/puzzle', {
    elements: conf
  })
}
