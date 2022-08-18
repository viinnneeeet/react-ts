import axios from 'axios';
import { ORDER_ROUTES, PRODUCT_ROUTES, USER_ROUTES } from 'Utils/Constants';

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

// Alter defaults after instance has been created
mainInstance.defaults.headers.common['authorization'] = AUTH_TOKEN
  ? AUTH_TOKEN
  : '';

productInstance.defaults.headers.common['authorization'] = AUTH_TOKEN
  ? AUTH_TOKEN
  : '';

orderInstance.defaults.headers.common['authorization'] = AUTH_TOKEN
  ? AUTH_TOKEN
  : '';

userInstance.defaults.headers.common['authorization'] = AUTH_TOKEN
  ? AUTH_TOKEN
  : '';

export { mainInstance, productInstance, orderInstance, userInstance };
