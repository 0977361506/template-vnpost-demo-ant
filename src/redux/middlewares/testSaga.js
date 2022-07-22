import { call, put, takeLatest } from 'redux-saga/effects'
import { getAccount } from 'services/AccountServices'
import { GET_ACCOUNT } from '../action/TestConstant'

// Worker saga will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
  try {
    const user = yield call(getAccount, action.payload.userId)
    yield put({ type: 'GET_ACCOUNT_SUCCEEDED', user })
  } catch (e) {
    yield put({ type: 'GET_ACCOUNT_FAILED', message: e.message })
  }
}

// Starts fetchUser on each dispatched USER_FETCH_REQUESTED action
// Allows concurrent fetches of user
function* testSaga() {
  yield takeLatest(GET_ACCOUNT, fetchUser)
}
export default testSaga
