import {
  GetProductDispatchTypes,
  ProductsType,
} from 'Redux/actions/productAction/GetProductsActionTypes';

import {
  LOADING_GET_PRODUCT,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILED,
  GET_PRODUCT_NETWORK_ERROR,
  RESET_GET_PRODUCT,
} from 'Redux/types';

type InitialStateT = {
  isLoading: boolean;
  success: boolean;
  failed: boolean;
  network: boolean;
  data?: ProductsType;
};

const initialState: InitialStateT = {
  isLoading: false,
  success: false,
  failed: false,
  network: false,
};
export default (
  state: InitialStateT = initialState,
  action: GetProductDispatchTypes
): InitialStateT => {
  switch (action.type) {
    case LOADING_GET_PRODUCT:
      return {
        isLoading: true,
        success: false,
        failed: false,
        network: false,
      };
    case GET_PRODUCT_SUCCESS:
      return {
        isLoading: false,
        success: true,
        failed: false,
        network: false,
        data: action.payload,
      };
    case GET_PRODUCT_FAILED:
      return {
        isLoading: false,
        success: true,
        failed: false,
        network: false,
        data: action.payload,
      };
    case GET_PRODUCT_NETWORK_ERROR:
      return {
        isLoading: false,
        success: false,
        failed: false,
        network: true,
      };
    case RESET_GET_PRODUCT:
      return state;
    default:
      return state;
  }
};
