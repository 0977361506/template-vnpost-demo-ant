import { getToken } from '../utils/Security'
import * as commonApis from './commonApis'

export const testApi = (callback, callbackErr) => {
  const token = getToken()
  const url = '/v1/users'
  commonApis.GET(url, token, '', callback, callbackErr)
}
