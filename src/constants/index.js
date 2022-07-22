import Error from 'utils/common/error'

const { SystemError } = Error
const DEFAULT_RESPONSE = { ok: false, msg: SystemError.UNEXPECTED_ERROR, sttCode: 404 }
export { DEFAULT_RESPONSE }
