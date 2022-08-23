import { Dispatch } from 'redux';
import { orderInstance } from 'Config/Axios/axios';
import {
  ADD_ORDER_SUCCESS,
  ADD_ORDER_FAILED,
  ADD_ORDER_NETWORK_ERROR,
  LOADING_ADD_ORDER,
  RESET_ADD_ORDER,
} from 'Redux/types';
import { AddOrderDispatchType } from 'Redux/actions/orderAction/addOrderActionTypes';

type UserData = {
  quantity: number;
  productId: string;
};
export const resetAddOrder = () => {
  return { type: RESET_ADD_ORDER };
};

export const addOrder =
  (userData: UserData) => async (dispatch: Dispatch<AddOrderDispatchType>) => {
    try {
      dispatch({ type: LOADING_ADD_ORDER });
      const res = await orderInstance.post('addOrder', userData);
      switch (res.data.success) {
        case true:
          return dispatch({ type: ADD_ORDER_SUCCESS, payload: res.data });
        default:
          return dispatch({ type: ADD_ORDER_FAILED, payload: res.data });
      }
    } catch (err: any) {
      dispatch({ type: ADD_ORDER_NETWORK_ERROR, payload: err });
    }
  };
