import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'
import rootSaga from './middlewares'

const sagaMiddleware = createSagaMiddleware()
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer,
  middleware,
})
sagaMiddleware.run(rootSaga)
