import { SearchProduct } from '../../types';
import ENDPOINTS from '../constants/endpoints';
import { request } from '../lib/api';

export default class CommonAPI {
  static getAllProducts = () => {
    return request(ENDPOINTS.GET_ALL_PRODUCTS, 'GET');
  };
  static fetchProducts = (payload: SearchProduct) => {
    return request(ENDPOINTS.SEARCH_PRODUCT, 'GET', payload);
  };
}
