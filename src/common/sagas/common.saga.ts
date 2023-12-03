import { call, put, takeLeading } from 'redux-saga/effects';
import { productsPayload } from '../../types';
import { ACTIONS } from '../actions/actionTypes';
import CommonAPI from '../api/common.api';

// eslint-disable-next-line no-empty-pattern
function* getAllProducts({ success }: { type: ACTIONS.GET_ALL_PRODUCTS; success: () => void }) {
  try {
    const data: productsPayload = yield call(CommonAPI.getAllProducts);
    yield put({ type: ACTIONS.SET_ALL_PRODUCTS, payload: data.products });
    success();
  } catch (error) {
    console.log('error', error);
  }
}
export default function* CommonSaga() {
  yield takeLeading(ACTIONS.GET_ALL_PRODUCTS, getAllProducts);
}
