import { DEFAULT_RESPONSE } from 'constants/index'

export default (response) => {
  const { ok, data, sttCode } = response
  const retVal = { ...DEFAULT_RESPONSE, data: null }
  if (ok) {
    const { Result: result, Error: serverError, Success: success } = data
    if (success) {
      retVal.data = result
      retVal.msg = ''
      retVal.sttCode = sttCode
      retVal.ok = true
      retVal.response = response
    } else {
      retVal.data = result
      retVal.msg = serverError.Message
      retVal.sttCode = serverError.StatusCode
      retVal.response = response
    }
  }
  return retVal
}
