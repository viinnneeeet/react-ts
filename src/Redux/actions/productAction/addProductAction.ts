import { Dispatch } from 'redux';
import { productInstance } from 'Config/Axios/axios';

import { AddProductDispatchTypes } from 'Redux/actions/productAction/addProductActionTypes';
import {
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILED,
  ADD_PRODUCT_NETWORK_ERROR,
  LOADING_ADD_PRODUCT,
  RESET_ADD_PRODUCT,
} from 'Redux/types';

type UserDataType = {
  initiatedBy: string;
  name: string;
  price?: number;
};
export const resetAddProduct = () => {
  return {
    type: RESET_ADD_PRODUCT,
  };
};

export const addProduct =
  (userData: UserDataType) =>
  async (dispatch: Dispatch<AddProductDispatchTypes>) => {
    try {
      dispatch({ type: LOADING_ADD_PRODUCT });
      const res = await productInstance.post('addProduct', userData);
      switch (res.data.success) {
        case true:
          return dispatch({ type: ADD_PRODUCT_SUCCESS, payload: res.data });
        default:
          return dispatch({ type: ADD_PRODUCT_FAILED, payload: res.data });
      }
    } catch (err) {
      dispatch({ type: ADD_PRODUCT_NETWORK_ERROR, payload: 'Network Error' });
    }
  };
