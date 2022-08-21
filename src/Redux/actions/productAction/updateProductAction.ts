import { Dispatch } from 'redux';
import {
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILED,
  UPDATE_PRODUCT_NETWORK_ERROR,
  LOADING_UPDATE_PRODUCT,
  RESET_UPDATE_PRODUCT,
} from 'Redux/types';
import { productInstance } from 'Config/Axios/axios';
import { UpdateProductDispatchType } from 'Redux/actions/productAction/updateProductActionTypes';

type UserData = {
  _id: string;
  name: string;
  price: number;
};
export const resetUpdateProduct = () => {
  return { type: RESET_UPDATE_PRODUCT };
};

export const updateProduct =
  (userData: UserData) =>
  async (dispatch: Dispatch<UpdateProductDispatchType>) => {
    try {
      dispatch({ type: LOADING_UPDATE_PRODUCT });
      const res = await productInstance.post('updateProduct', userData);
      switch (res.data.success) {
        case true:
          return dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: res.data });
        default:
          return dispatch({ type: UPDATE_PRODUCT_FAILED, payload: res.data });
      }
    } catch (err: any) {
      dispatch({ type: UPDATE_PRODUCT_NETWORK_ERROR, payload: err });
    }
  };
