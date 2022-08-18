import {
  LOADING_GET_ORDER,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  GET_ORDER_NETWORK_ERROR,
  RESET_GET_ORDER,
} from 'Redux/types';
import {
  GetOrderDispatchTypes,
  OrdersType,
} from 'Redux/actions/orderAction/getOrderActionTypes';

type InitialStateType = {
  data?: OrdersType;
  isLoading: boolean;
  success: boolean;
  failed: boolean;
  networkError: boolean;
};

const initialState: InitialStateType = {
  isLoading: false,
  success: false,
  failed: false,
  networkError: false,
};

const getOrder = (
  state: InitialStateType = initialState,
  action: GetOrderDispatchTypes
): InitialStateType => {
  switch (action.type) {
    case LOADING_GET_ORDER:
      return {
        isLoading: true,
        success: false,
        failed: false,
        networkError: false,
      };
    case GET_ORDER_SUCCESS:
      return {
        isLoading: false,
        success: true,
        failed: false,
        networkError: false,
        data: action.payload,
      };
    case GET_ORDER_FAILED:
      return {
        isLoading: false,
        success: false,
        failed: true,
        networkError: false,
        data: action.payload,
      };
    case GET_ORDER_NETWORK_ERROR:
      return {
        isLoading: false,
        success: false,
        failed: false,
        networkError: true,
      };
    case RESET_GET_ORDER:
      return state;
    default:
      return state;
  }
};

export default getOrder;
