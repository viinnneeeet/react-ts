import { Dispatch } from 'redux';
import { productInstance } from 'Config/Axios/axios';
import {
  LOADING_GET_PRODUCT,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILED,
  GET_PRODUCT_NETWORK_ERROR,
  RESET_GET_PRODUCT,
} from 'Redux/types';
import { GetProductDispatchTypes } from './GetProductsActionTypes';

type userDataType = {
  initiatedBy: string;
};

//Reset
export const resetGetProduct = () => {
  return { type: RESET_GET_PRODUCT };
};
export const getProduct =
  (userData: userDataType) =>
  async (dispatch: Dispatch<GetProductDispatchTypes>) => {
    try {
      dispatch({
        type: LOADING_GET_PRODUCT,
      });

      const res = await productInstance.post('getProduct', userData);
      switch (res.data.success) {
        case true:
          return dispatch({
            type: GET_PRODUCT_SUCCESS,
            payload: res.data,
          });
        default:
          return dispatch({
            type: GET_PRODUCT_FAILED,
            payload: res.data,
          });
      }
    } catch (err) {
      return dispatch({
        type: GET_PRODUCT_NETWORK_ERROR,
        payload: 'Network error',
      });
    }
  };
