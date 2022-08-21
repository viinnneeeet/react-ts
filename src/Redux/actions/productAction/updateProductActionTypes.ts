import {
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILED,
  UPDATE_PRODUCT_NETWORK_ERROR,
  LOADING_UPDATE_PRODUCT,
  RESET_UPDATE_PRODUCT,
} from 'Redux/types';

export type UpdateProductType = {
  message: string;
  success?: boolean;
  failed?: boolean;
};

type UpdateProductSuccessType = {
  type: typeof UPDATE_PRODUCT_SUCCESS;
  payload: UpdateProductType;
};

type UpdateProductFailType = {
  type: typeof UPDATE_PRODUCT_FAILED;
  payload: UpdateProductType;
};

type UpdateNetworkErrorType = {
  type: typeof UPDATE_PRODUCT_NETWORK_ERROR;
  payload: UpdateProductType;
};

type LoadingUpdateProductType = {
  type: typeof LOADING_UPDATE_PRODUCT;
};

type ResetUpdateProductType = {
  type: typeof RESET_UPDATE_PRODUCT;
};

export type UpdateProductDispatchType =
  | LoadingUpdateProductType
  | UpdateProductSuccessType
  | UpdateProductFailType
  | UpdateNetworkErrorType
  | ResetUpdateProductType;
