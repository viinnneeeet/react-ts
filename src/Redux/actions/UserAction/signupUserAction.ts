import { Dispatch } from 'redux';
import {
  SIGN_UP_USER_SUCCESS,
  SIGN_UP_USER_FAILED,
  SIGN_UP_USER_NETWORK_ERROR,
  LOADING_SIGN_UP_USER,
  RESET_SIGN_UP_USER,
} from 'Redux/types';
import { userInstance } from 'Config/Axios/axios';
import { SignUpUserDispatchType } from 'Redux/actions/UserAction/signupUserActionTypes';

type userDataTypes = {
  email: string;
  password: string;
  role: 'user' | 'admin' | 'superAdmin';
};

export const resetSignUpUser = () => {
  return {
    type: RESET_SIGN_UP_USER,
  };
};

export const signupUser =
  (userData: userDataTypes) =>
  async (dispatch: Dispatch<SignUpUserDispatchType>) => {
    try {
      dispatch({ type: LOADING_SIGN_UP_USER });
      const res = await userInstance.post('/signup', userData);

      switch (res.data.success) {
        case true:
          return dispatch({ type: SIGN_UP_USER_SUCCESS, payload: res.data });
        default:
          return dispatch({ type: SIGN_UP_USER_FAILED, payload: res.data });
      }
    } catch (err: any) {
      dispatch({ type: SIGN_UP_USER_NETWORK_ERROR, payload: err });
    }
  };
