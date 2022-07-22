import { ReduxAction } from './ReduxAction'
import { GET_LIST } from './TestConstant'

export const TEST_METHOD_GET = (data) => {
  return ReduxAction(GET_LIST, data)
}
