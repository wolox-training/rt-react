import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { fetchMiddleware } from 'redux-recompose';

import createRootReducer from './reducer';

import games from '../redux/game/reducer';
import login from '../redux/login/reducer';

export const history = createBrowserHistory();


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preloadState) {
  const store = createStore(
    createRootReducer(history) ,
    preloadState,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        thunk,
        fetchMiddleware
      ),
      composeEnhancers()
    ),
  )

  return store;
}
