import { combineReducers } from 'redux';

//Reducer Files
import products from './getProductsReducer';
import order from './getOrderReducer';
import addProduct from './addProductReducer';
import login from './loginReducer';
import updateProduct from './updateProductReducer';
import addOrder from './addOrderReducer';
import signupUser from './signupUserReducer';

const RootReducer = combineReducers({
  signupUser,
  login,
  products,
  order,
  addProduct,
  updateProduct,
  addOrder,
});

export default RootReducer;
