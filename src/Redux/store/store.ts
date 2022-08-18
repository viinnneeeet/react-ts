import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import RootReducer from 'Redux/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, RootReducer);

export type RootStore = ReturnType<typeof RootReducer>;

const Store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);
const persistor = persistStore(Store);

export { Store, persistor };
