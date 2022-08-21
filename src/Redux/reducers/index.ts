import { combineReducers } from 'redux';

//Reducer Files
import getProductReducer from './getProductsReducer';
import getOrder from './getOrderReducer';
import addProduct from './addProductReducer';
import login from './loginReducer';
import updateProduct from './updateProductReducer';

const RootReducer = combineReducers({
  products: getProductReducer,
  order: getOrder,
  addProduct,
  login,
  updateProduct,
});

export default RootReducer;
