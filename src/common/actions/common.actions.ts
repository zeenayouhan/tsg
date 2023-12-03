import { SearchProduct } from '../../types';
import { ACTIONS } from './actionTypes';

export const getAllProducts = () => ({
  type: ACTIONS.GET_ALL_PRODUCTS,
});

export const fetchProduct = (payload: SearchProduct) => ({
  type: ACTIONS.FETCH_PRODUCT,
  payload: payload,
});

export const getProduct = (payload: number) => ({
  type: ACTIONS.GET_PRODUCT,
  payload: payload,
});
