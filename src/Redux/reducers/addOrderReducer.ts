import {
  ADD_ORDER_SUCCESS,
  ADD_ORDER_FAILED,
  ADD_ORDER_NETWORK_ERROR,
  LOADING_ADD_ORDER,
  RESET_ADD_ORDER,
} from 'Redux/types';
import {
  AddOrderDispatchType,
  AddOrderType,
} from 'Redux/actions/orderAction/addOrderActionTypes';

type InitialStateType = {
  isLoading: boolean;
  success: boolean;
  failed: boolean;
  networkError: boolean;
  data?: AddOrderType;
};

const initialState = {
  isLoading: false,
  success: false,
  failed: false,
  networkError: false,
};

export default (
  state: InitialStateType = initialState,
  action: AddOrderDispatchType
): InitialStateType => {
  switch (action.type) {
    case LOADING_ADD_ORDER:
      return {
        isLoading: true,
        success: false,
        failed: false,
        networkError: false,
      };
    case ADD_ORDER_SUCCESS:
      return {
        isLoading: false,
        success: true,
        failed: false,
        networkError: false,
        data: action.payload,
      };
    case ADD_ORDER_FAILED:
      return {
        isLoading: false,
        success: false,
        failed: true,
        networkError: false,
        data: action.payload,
      };
    case ADD_ORDER_NETWORK_ERROR:
      return {
        isLoading: false,
        success: false,
        failed: false,
        networkError: true,
        data: action.payload,
      };
    case RESET_ADD_ORDER:
      return state;
    default:
      return state;
  }
};
