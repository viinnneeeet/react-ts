import axios from 'axios';
import { ORDER_ROUTES, PRODUCT_ROUTES, USER_ROUTES } from '../Constants';
import { Store } from 'Redux/store/store';
// For common config
axios.defaults.headers.post['Content-Type'] = 'application/json';

const AUTH_TOKEN = localStorage.getItem('accessToken');

// Set config defaults when creating the instance

// const instances = [
//   { name: 'mainInstance', url: 'http://localhost:8626' },
//   { name: 'productInstance', url: `http://localhost:8626/${PRODUCT_ROUTES}` },
//   { name: 'orderInstance', url: `http://localhost:8626/${ORDER_ROUTES}` },
//   { name: 'userInstance', url: `http://localhost:8626/${USER_ROUTES}` },
// ];
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
      console.log('request sent');
      return Promise.resolve(req);
    },
    async (err) => {
      // console.log(error);
      if (err.response.status === 469) {
        try {
          const userData = { accessToken: AUTH_TOKEN };
          const result = await userInstance.post('/refreshToken', userData);
          console.log(result.data);
          localStorage.setItem('accessToken', result.data?.accessToken);
        } catch (err) {
          console.log(err);
        }
      }
      return Promise.reject(err);
    }
  );

  instance.interceptors.response.use(
    (res) => {
      console.log('response send');
      return Promise.resolve(res);
    },
    async (err) => {
      if (err.response.status === 401) {
        try {
          const login = Store.getState().login;
          console.log(login);
          const userData = {
            _id: login.data?.data._id,
            email: login.data?.data.email,
            accessToken: AUTH_TOKEN,
          };
          const result = await userInstance.post('/refreshToken', userData);
          console.log(result.data);
          localStorage.setItem('accessToken', result.data?.accessToken);
        } catch (err) {
          console.log(err);
        }
      }
      return Promise.reject(err);
    }
  );

  //passing auth token
  instance.defaults.headers.common['authorization'] = AUTH_TOKEN
    ? AUTH_TOKEN
    : '';
});

export { mainInstance, productInstance, orderInstance, userInstance };
