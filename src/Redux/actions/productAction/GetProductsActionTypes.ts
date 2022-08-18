import {
  LOADING_GET_PRODUCT,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILED,
  GET_PRODUCT_NETWORK_ERROR,
  RESET_GET_PRODUCT,
} from 'Redux/types';

export type ProductsType = {
  product: ProductType[];
};

export type ProductType = {
  _id: string;
  name: string;
  price: number;
};

export type GetProductSuccessType = {
  type: typeof GET_PRODUCT_SUCCESS;
  payload: ProductsType;
};

export type GetProductFailType = {
  type: typeof GET_PRODUCT_FAILED;
  payload: ProductsType;
};

export type LoadingGetProductType = {
  type: typeof LOADING_GET_PRODUCT;
};
export type GetProductNetworkErrorType = {
  type: typeof GET_PRODUCT_NETWORK_ERROR;
  payload: string;
};
export type ResetGetProductType = {
  type: typeof RESET_GET_PRODUCT;
};

export type GetProductDispatchTypes =
  | GetProductSuccessType
  | LoadingGetProductType
  | GetProductFailType
  | GetProductNetworkErrorType
  | ResetGetProductType;
