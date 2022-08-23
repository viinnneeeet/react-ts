import {
  ADD_ORDER_SUCCESS,
  ADD_ORDER_FAILED,
  ADD_ORDER_NETWORK_ERROR,
  LOADING_ADD_ORDER,
  RESET_ADD_ORDER,
} from 'Redux/types';

export type AddOrderType = {
  message: string;
  success?: boolean;
  failed?: boolean;
};

type AddOrderSuccess = {
  type: typeof ADD_ORDER_SUCCESS;
  payload: AddOrderType;
};

type AddOrderFail = {
  type: typeof ADD_ORDER_FAILED;
  payload: AddOrderType;
};

type AddOrderNetworkError = {
  type: typeof ADD_ORDER_NETWORK_ERROR;
  payload: AddOrderType;
};

type LoadingAddOrder = {
  type: typeof LOADING_ADD_ORDER;
};

type ResetAddOrder = {
  type: typeof RESET_ADD_ORDER;
};

export type AddOrderDispatchType =
  | LoadingAddOrder
  | AddOrderSuccess
  | AddOrderFail
  | AddOrderNetworkError
  | ResetAddOrder;
