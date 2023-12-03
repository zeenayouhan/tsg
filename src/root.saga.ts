import { all } from 'redux-saga/effects'
import CommonSaga from './common/sagas/common.saga'

export default function* rootSaga() {
  yield all([CommonSaga()])
}
