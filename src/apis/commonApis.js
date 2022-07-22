/* eslint-disable no-param-reassign */
import axios from 'axios'
import { notification } from 'antd'
import AppConfig from 'configs/AppConfig'
import { DEFAULT_RESPONSE } from 'constants/index'
// import { store } from 'store'

const { baseApiUrl, requestTimeout, timeoutInterval } = AppConfig

const key = 'errorAPI'

const errorAPI = (error) => {
  if (error && error.toString().indexOf('Error: Network Error') === 0) {
    notification.open({
      key,
      message: 'Có lỗi xảy ra',
      description: 'Có lỗi không mong muốn xảy ra, vui lòng kiếm tra lại',
    })
  }
}

const api = axios.create({
  baseURL: `${baseApiUrl}`,
  headers: {
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json; charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
    'Access-Control-Allow-Headers':
      'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
  },
  timeout: requestTimeout * 60 * timeoutInterval,
})

api.interceptors.response.use(
  (config) => {
    const { status, data } = config
    const retVal = { ...DEFAULT_RESPONSE, sttCode: status }
    // if ok
    if (status >= 200 && status < 300) {
      if (data) {
        retVal.ok = true
        retVal.data = data
        retVal.msg = ''
      }
    }
    return retVal
  },
  /* eslint-disable max-lines-per-function */
  (error) => {
    // retry only with 401 code
    if (error.response && error.response.status === 401) {
      // check không có quyền
    }
    errorAPI(error)
    return Promise.reject(error)
  },
)

api.interceptors.request.use((configs) => {
  // const { tokenKey } = store.getState().auth
  configs.headers = {
    ...configs.headers,
    // Authorization: tokenKey,
    Auth: '1',
  }
  return configs
})

export { api }
