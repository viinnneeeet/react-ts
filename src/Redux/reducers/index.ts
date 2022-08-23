import { combineReducers } from 'redux';

//Reducer Files
import products from './getProductsReducer';
import order from './getOrderReducer';
import addProduct from './addProductReducer';
import login from './loginReducer';
import updateProduct from './updateProductReducer';
import addOrder from './addOrderReducer';

const RootReducer = combineReducers({
  products,
  order,
  addProduct,
  login,
  updateProduct,
  addOrder,
});

export default RootReducer;
