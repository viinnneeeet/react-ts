import {
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILED,
  UPDATE_PRODUCT_NETWORK_ERROR,
  LOADING_UPDATE_PRODUCT,
  RESET_UPDATE_PRODUCT,
} from 'Redux/types';
import {
  UpdateProductDispatchType,
  UpdateProductType,
} from 'Redux/actions/productAction/updateProductActionTypes';

type InitialStateType = {
  isLoading: boolean;
  success: boolean;
  failed: boolean;
  network: boolean;
  data?: UpdateProductType;
};

const initialState = {
  isLoading: false,
  success: false,
  failed: false,
  network: false,
};

export default (
  state: InitialStateType = initialState,
  action: UpdateProductDispatchType
): InitialStateType => {
  switch (action.type) {
    case LOADING_UPDATE_PRODUCT:
      return {
        isLoading: true,
        success: false,
        failed: false,
        network: false,
      };
    case UPDATE_PRODUCT_SUCCESS:
      return {
        isLoading: false,
        success: true,
        failed: false,
        network: false,
        data: action.payload,
      };
    case UPDATE_PRODUCT_FAILED:
      return {
        isLoading: false,
        success: false,
        failed: true,
        network: false,
        data: action.payload,
      };
    case UPDATE_PRODUCT_NETWORK_ERROR:
      return {
        isLoading: false,
        success: false,
        failed: false,
        network: true,
        data: action.payload,
      };
    case RESET_UPDATE_PRODUCT:
      return state;
    default:
      return state;
  }
};
