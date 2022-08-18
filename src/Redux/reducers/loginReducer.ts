import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGIN_USER_NETWORK_ERROR,
  LOADING_LOGIN_USER,
  RESET_LOGIN_USER,
} from 'Redux/types';
import {
  LoginDispatchTypes,
  LoginType,
} from 'Redux/actions/UserAction/loginActionTypes';

type InitialStateType = {
  isLoading: boolean;
  success: boolean;
  failed: boolean;
  networkError: boolean;
  data?: LoginType;
};

const initialState = {
  isLoading: false,
  success: false,
  failed: false,
  networkError: false,
};

const login = (
  state: InitialStateType = initialState,
  action: LoginDispatchTypes
): InitialStateType => {
  switch (action.type) {
    case LOADING_LOGIN_USER:
      return {
        isLoading: true,
        success: false,
        failed: false,
        networkError: false,
      };
    case LOGIN_USER_SUCCESS:
      return {
        isLoading: false,
        success: true,
        failed: false,
        networkError: false,
        data: action.payload,
      };
    case LOGIN_USER_FAILED:
      return {
        isLoading: false,
        success: false,
        failed: true,
        networkError: false,
        data: action.payload,
      };
    case LOGIN_USER_NETWORK_ERROR:
      return {
        isLoading: false,
        success: false,
        failed: false,
        networkError: true,
        data: action.payload,
      };
    case RESET_LOGIN_USER:
      return state;
    default:
      return state;
  }
};

export default login;
