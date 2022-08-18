import { combineReducers } from 'redux';

//Reducer Files
import getProductReducer from './getProductsReducer';
import getOrder from './getOrderReducer';
import addProduct from './addProductReducer';
import login from './loginReducer';

const RootReducer = combineReducers({
  products: getProductReducer,
  order: getOrder,
  addProduct,
  login,
});

export default RootReducer;
