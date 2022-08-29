import {
  SIGN_UP_USER_SUCCESS,
  SIGN_UP_USER_FAILED,
  SIGN_UP_USER_NETWORK_ERROR,
  LOADING_SIGN_UP_USER,
  RESET_SIGN_UP_USER,
} from 'Redux/types';
import {
  SignUpUserDispatchType,
  SignUpUserType,
} from 'Redux/actions/UserAction/signupUserActionTypes';

type InitialStateType = {
  isLoading: boolean;
  success: boolean;
  failed: boolean;
  networkError: boolean;
  data?: SignUpUserType;
};

const initialState = {
  isLoading: false,
  success: false,
  failed: false,
  networkError: false,
};

export default (
  state: InitialStateType = initialState,
  action: SignUpUserDispatchType
): InitialStateType => {
  switch (action.type) {
    case LOADING_SIGN_UP_USER:
      return {
        isLoading: true,
        success: false,
        failed: false,
        networkError: false,
      };
    case SIGN_UP_USER_SUCCESS:
      return {
        isLoading: false,
        success: true,
        failed: false,
        networkError: false,
        data: action.payload,
      };
    case SIGN_UP_USER_FAILED:
      return {
        isLoading: false,
        success: false,
        failed: true,
        networkError: false,
        data: action.payload,
      };
    case SIGN_UP_USER_NETWORK_ERROR:
      return {
        isLoading: false,
        success: false,
        failed: false,
        networkError: true,
        data: action.payload,
      };
    case RESET_SIGN_UP_USER:
      return state;
    default:
      return state;
  }
};
