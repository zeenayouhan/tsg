import { CommonReducer, productPayload } from '../../types';
import { ACTIONS } from '../actions/actionTypes';

const INITIAL_STATE: CommonReducer = {
  products: null,
  product: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (
  state = INITIAL_STATE,
  { type, payload }: { type: string; payload: unknown },
): CommonReducer => {
  switch (type) {
    case ACTIONS.SET_ALL_PRODUCTS:
      return {
        ...state,
        products: payload as productPayload[],
      };
    case ACTIONS.SET_PRODUCT:
      return {
        ...state,
        product: payload as productPayload,
      };
    default:
      return {
        ...state,
      };
  }
};
