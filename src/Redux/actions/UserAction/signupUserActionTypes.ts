import {
  SIGN_UP_USER_SUCCESS,
  SIGN_UP_USER_FAILED,
  SIGN_UP_USER_NETWORK_ERROR,
  LOADING_SIGN_UP_USER,
  RESET_SIGN_UP_USER,
} from 'Redux/types';

export type SignUpUserType = {
  message: string;
  success: boolean;
  failed: boolean;
};

type SignUpUserSuccessType = {
  type: typeof SIGN_UP_USER_SUCCESS;
  payload: SignUpUserType;
};

type SignUpUserFailedType = {
  type: typeof SIGN_UP_USER_FAILED;
  payload: SignUpUserType;
};

type SignUpUserNetworkError = {
  type: typeof SIGN_UP_USER_NETWORK_ERROR;
  payload: SignUpUserType;
};

type LoadingSignUpUser = {
  type: typeof LOADING_SIGN_UP_USER;
};

type ResetSignUpUser = {
  type: typeof RESET_SIGN_UP_USER;
};

export type SignUpUserDispatchType =
  | LoadingSignUpUser
  | SignUpUserSuccessType
  | SignUpUserFailedType
  | SignUpUserNetworkError
  | ResetSignUpUser;
