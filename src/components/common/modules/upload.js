import api from '@/api'
import md5 from 'md5'

export default async function (file) {
  let d = new Date()
  let fileTypeArr = file.name.split('.')
  let fileType = fileTypeArr[fileTypeArr.length - 1]
  let filename = `${md5(file.name + d.valueOf())}.${fileType}`
  let {uptoken} = await api.getUptoken({
    bucket: 'puzzle',
    key: filename
  }).then(res => {
    return res.data
  })
  let formData = new FormData()
  formData.append('file', file, filename)
  formData.append('token', uptoken)
  let result = await api.uploadFile(formData).then(res => {
    if (res.status === 200) {
      if (res.data) {
        return `http://p1knmxigx.bkt.clouddn.com/${res.data.key}`
      } else {
        return false
      }
    } else {
      return false
    }
  })
  return result
}
