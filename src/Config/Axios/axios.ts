import axios from 'axios';
import { ORDER_ROUTES, PRODUCT_ROUTES, USER_ROUTES } from '../Constants';
import { Store } from 'Redux/store/store';
// For common config
axios.defaults.headers.post['Content-Type'] = 'application/json';
// const AUTH_TOKEN = localStorage.getItem('refreshToken')
//   ? localStorage.getItem('refreshToken')
//   : localStorage.getItem('accessToken');
const AUTH_TOKEN = localStorage.getItem('accessToken');
// ? localStorage.getItem('accessToken')
// : localStorage.getItem('refreshToken');

console.log();
const mainInstance = axios.create({
  baseURL: 'http://localhost:8626',
});

const productInstance = axios.create({
  baseURL: `http://localhost:8626/${PRODUCT_ROUTES}`,
});
const orderInstance = axios.create({
  baseURL: `http://localhost:8626/${ORDER_ROUTES}`,
});

const userInstance = axios.create({
  baseURL: `http://localhost:8626/${USER_ROUTES}`,
});

[productInstance, orderInstance, userInstance].forEach((instance) => {
  //request interceptors

  instance.interceptors.request.use(
    (req) => {
      // console.log('request sent');
      return Promise.resolve(req);
    },
    async (err) => {
      return await Promise.reject(err);
    }
  );

  instance.interceptors.response.use(
    (res) => {
      // console.log('response send');
      return Promise.resolve(res);
    },
    async (err) => {
      try {
        if (err.response.status === 401) {
          const login = Store.getState().login;
          if (login.success) {
            const userData = {
              _id: login.data?.user._id,
              email: login.data?.user.email,
            };
            const result = await userInstance.post('/refreshToken', userData);
            return localStorage.setItem(
              'accessToken',
              result.data?.accessToken
            );
          }
        }
      } catch (err) {
        return Promise.reject(err);
      }
    }
  );

  //passing auth token
  instance.defaults.headers.common['authorization'] = AUTH_TOKEN
    ? AUTH_TOKEN
    : '';
});

export { mainInstance, productInstance, orderInstance, userInstance };
