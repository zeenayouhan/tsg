import { call, put, takeLeading } from 'redux-saga/effects';
import { SearchProduct, productPayload, productsPayload } from '../../types';
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

function* fetchProducts({
  success,
  payload,
}: {
  payload: SearchProduct;
  type: ACTIONS.GET_ALL_PRODUCTS;
  success: () => void;
}) {
  try {
    const data: productsPayload = yield call(CommonAPI.fetchProducts, payload);
    yield put({ type: ACTIONS.SET_ALL_PRODUCTS, payload: data.products });
    success();
  } catch (error) {
    console.log('error', error);
  }
}

function* getProduct({
  success,
  payload,
}: {
  payload: number;
  type: ACTIONS.GET_PRODUCT;
  success: () => void;
}) {
  try {
    const data: productPayload = yield call(CommonAPI.getProduct, payload);
    yield put({ type: ACTIONS.SET_PRODUCT, payload: data });
    success();
  } catch (error) {
    console.log('error', error);
  }
}
export default function* CommonSaga() {
  yield takeLeading(ACTIONS.GET_ALL_PRODUCTS, getAllProducts);
  yield takeLeading(ACTIONS.FETCH_PRODUCT, fetchProducts);
  yield takeLeading(ACTIONS.GET_PRODUCT, getProduct);
}
