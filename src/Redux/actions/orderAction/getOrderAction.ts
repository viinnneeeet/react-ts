import { Dispatch } from 'redux';
import { orderInstance } from 'Config/Axios/axios';
import {
  LOADING_GET_ORDER,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  GET_ORDER_NETWORK_ERROR,
  RESET_GET_ORDER,
} from 'Redux/types';
import { GetOrderDispatchTypes } from 'Redux/actions/orderAction/getOrderActionTypes';

type UserData = {
  initiatedBy: string;
};

export const resetGetOrder = () => {
  return {
    type: RESET_GET_ORDER,
  };
};

export const getOrder =
  (userData: UserData) => async (dispatch: Dispatch<GetOrderDispatchTypes>) => {
    try {
      dispatch({ type: LOADING_GET_ORDER });
      const res = await orderInstance.post('getOrder', userData);
      switch (res.data.success) {
        case true:
          return dispatch({ type: GET_ORDER_SUCCESS, payload: res.data });
        default:
          return dispatch({ type: GET_ORDER_FAILED, payload: res.data });
      }
    } catch (err: any) {
      dispatch({ type: GET_ORDER_NETWORK_ERROR, payload: err });
    }
  };
