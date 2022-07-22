import { store } from '../redux/store'
import * as testAction from '../redux/action/TestAction'

export default class TestProcessor {
  testApi = () => {
    store.dispatch(testAction.TEST_METHOD_GET('redux_success'))
    // TestApis.testApi(this.success, this.errorHandler)
  }

  success = (res) => {
    store.dispatch(testAction.TEST_METHOD_GET(res.data))
  }

  errorHandler = (eror) => {
    console.log(eror)
  }
}
