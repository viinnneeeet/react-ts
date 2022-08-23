import {
  LOADING_GET_ORDER,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  GET_ORDER_NETWORK_ERROR,
  RESET_GET_ORDER,
} from 'Redux/types';

export type OrdersType = {
  orders: OrderType[];
};

export type OrderType = {
  _id: string;
  quantity: number;
  productId: string;
  productName: string;
  price: number;
  totalPrice: number;
  message: string;
};

export type GetOrderSuccess = {
  type: typeof GET_ORDER_SUCCESS;
  payload: OrdersType;
};

export type GetOrderFailed = {
  type: typeof GET_ORDER_FAILED;
  payload: OrdersType;
};

export type GetOrderNetworkError = {
  type: typeof GET_ORDER_NETWORK_ERROR;
  payload: string;
};

export type LoadingGetOrder = {
  type: typeof LOADING_GET_ORDER;
};

export type ResetGetOrder = {
  type: typeof RESET_GET_ORDER;
};

export type GetOrderDispatchTypes =
  | LoadingGetOrder
  | GetOrderSuccess
  | GetOrderFailed
  | GetOrderNetworkError
  | ResetGetOrder;
