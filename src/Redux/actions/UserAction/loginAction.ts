import { Dispatch } from 'redux';
import { userInstance } from 'Config/Axios/axios';
import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGIN_USER_NETWORK_ERROR,
  LOADING_LOGIN_USER,
  RESET_LOGIN_USER,
} from 'Redux/types';
import { LoginDispatchTypes } from './loginActionTypes';

type UserDataType = {
  email: string;
  password: string;
};
const resetLogin = () => {
  return {
    type: RESET_LOGIN_USER,
  };
};

const loginUser =
  (userData: UserDataType) =>
  async (dispatch: Dispatch<LoginDispatchTypes>) => {
    try {
      dispatch({ type: LOADING_LOGIN_USER });

      const res = await userInstance.post('login', userData);

      switch (res.data.success) {
        case true:
          dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data });
          break;
        default:
          dispatch({ type: LOGIN_USER_FAILED, payload: res.data });
          break;
      }
    } catch (err: any) {
      return dispatch({
        type: LOGIN_USER_NETWORK_ERROR,
        payload: err.message,
      });
    }
  };

export { resetLogin, loginUser };
