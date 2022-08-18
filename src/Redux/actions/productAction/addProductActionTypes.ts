import {
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILED,
  ADD_PRODUCT_NETWORK_ERROR,
  LOADING_ADD_PRODUCT,
  RESET_ADD_PRODUCT,
} from 'Redux/types';

export type ProductAddedType = {
  message: string;
  success: boolean;
};

export type AddProductSuccessType = {
  type: typeof ADD_PRODUCT_SUCCESS;
  payload: ProductAddedType;
};
export type AddProductFailType = {
  type: typeof ADD_PRODUCT_FAILED;
  payload: ProductAddedType;
};
export type AddProductNetworkType = {
  type: typeof ADD_PRODUCT_NETWORK_ERROR;
  payload: string;
};
export type LoadingAddProductType = {
  type: typeof LOADING_ADD_PRODUCT;
};
export type ResetAddProductType = {
  type: typeof RESET_ADD_PRODUCT;
};

export type AddProductDispatchTypes =
  | LoadingAddProductType
  | AddProductSuccessType
  | AddProductFailType
  | AddProductNetworkType
  | ResetAddProductType;
