import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { CONFLICTS, GONE } from '../constants';
import { baseURL } from '../../config';

axios.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (
      error?.response?.status !== undefined &&
      error?.response?.status !== GONE &&
      error?.response?.status !== CONFLICTS &&
      (error?.response?.status < 200 || error?.response?.status > 399)
    ) {
      return Promise.reject(500);
    }
    return Promise.reject(true);
  },
);

export const request = (
  url: AxiosRequestConfig['url'],
  method: AxiosRequestConfig['method'],
  requestData?: AxiosRequestConfig['data'] | AxiosRequestConfig['params'],
) =>
  new Promise(async (resolve, reject) => {
    const endpoint = url?.replace?.('<BASE_URL>', baseURL);

    console.log('REQUEST: ', method, endpoint, requestData);

    const params = method === 'GET' ? requestData : null;
    const data = method === 'GET' ? null : requestData;

    axios({
      url: endpoint,
      method,
      data,
      params,

      timeout: 30000,
    })
      .then(async (response: AxiosResponse) => {
        console.log('RESPONSE: ', response);
        resolve(response.data);
      })
      .catch(async (error: AxiosError) => {
        let message;
        if (error?.response) {
          message = error?.response?.data;
        } else if (error?.request) {
          message = error?.request;

          if (typeof message === 'object') {
            message = JSON.stringify(message);
          }
        } else {
          message = error?.message;
        }
        reject(error);
      });
  });
