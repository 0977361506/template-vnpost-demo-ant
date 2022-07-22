import { api } from 'apis/commonApis'
import { DEFAULT_RESPONSE } from 'constants/index'
import formatResponse from 'utils/helpers/ResponseHelper'

import log from './LoggingServices'

// eslint-disable-next-line import/prefer-default-export
export const getAccount = async (id) => {
  let retVal = { ...DEFAULT_RESPONSE, account: null }
  await api
    .get(`user/fetchAccount?folderName=${id}`)
    .then((response) => {
      retVal = formatResponse(response)
    })
    .catch((e) => {
      log(e)
    })
  return retVal
}
