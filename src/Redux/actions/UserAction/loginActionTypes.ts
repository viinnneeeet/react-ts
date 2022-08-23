import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGIN_USER_NETWORK_ERROR,
  LOADING_LOGIN_USER,
  RESET_LOGIN_USER,
} from 'Redux/types';

export type LoginType = {
  user: {
    _id: string;
    email: string;
    role: string;
  };
  accessToken: string;
  message: string;
  success: boolean;
  failed: boolean;
};

export type LoginSuccessType = {
  type: typeof LOGIN_USER_SUCCESS;
  payload: LoginType;
};

export type LoginFailType = {
  type: typeof LOGIN_USER_FAILED;
  payload: LoginType;
};

export type LoadingLoginType = {
  type: typeof LOADING_LOGIN_USER;
};

export type LoginNetworkErrorType = {
  type: typeof LOGIN_USER_NETWORK_ERROR;
  payload: LoginType;
  // payload: string;
};

export type ResetLoginType = {
  type: typeof RESET_LOGIN_USER;
};

export type LoginDispatchTypes =
  | LoadingLoginType
  | LoginSuccessType
  | LoginFailType
  | LoginNetworkErrorType
  | ResetLoginType;
