import { combineReducers, createStore, compose } from 'redux';

import books from './book/reducer';
import shoppingCart from './shoppingCart/reducer';

const appReducers = combineReducers({
  books,
  shoppingCart
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
export default createStore(appReducers, composeEnhancers());
