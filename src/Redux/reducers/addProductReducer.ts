import {
  AddProductDispatchTypes,
  ProductAddedType,
} from 'Redux/actions/productAction/addProductActionTypes';
import {
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILED,
  ADD_PRODUCT_NETWORK_ERROR,
  LOADING_ADD_PRODUCT,
  RESET_ADD_PRODUCT,
} from 'Redux/types';

type InitialStateType = {
  data?: ProductAddedType;
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

const addProduct = (
  state: InitialStateType = initialState,
  action: AddProductDispatchTypes
): InitialStateType => {
  switch (action.type) {
    case LOADING_ADD_PRODUCT:
      return {
        isLoading: true,
        success: false,
        failed: false,
        networkError: false,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        isLoading: false,
        success: true,
        failed: false,
        networkError: false,
        data: action.payload,
      };
    case ADD_PRODUCT_FAILED:
      return {
        isLoading: false,
        success: false,
        failed: true,
        networkError: false,
        data: action.payload,
      };
    case ADD_PRODUCT_NETWORK_ERROR:
      return {
        isLoading: false,
        success: false,
        failed: false,
        networkError: true,
      };
    case RESET_ADD_PRODUCT:
      return state;
    default:
      return state;
  }
};

export default addProduct;
