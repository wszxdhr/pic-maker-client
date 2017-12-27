import axios from './interceptor'

export default {
  makePicture: (conf) => axios.post('/puzzle', conf),
  getUptoken: (conf) => axios.post('/uptoken', conf),
  uploadFile: (params) => axios.post('http://upload.qiniu.com', params, {
    headers: {'Content-Type': 'multipart/form-data'}
  })
}
