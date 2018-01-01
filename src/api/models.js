import axios from './interceptor'

export default {
  getModels: () => axios.get('/puzzle/model/list'),
  addModel: ({content}) => {
    content.type = 'product'
    axios.post('/puzzle/model/add', content)
  },
  saveModel: ({id, content}) => {
    content.type = 'product'
    return axios.post(`/puzzle/model/update?id=${id}`, content)
  },
  getModel: ({id}) => axios.get(`/puzzle/model/item?id=${id}`)
}
