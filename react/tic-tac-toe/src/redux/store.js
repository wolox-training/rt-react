import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form';
import { browserHistory, routerMiddleware } from 'react-router-redux';

import games from '../redux/game/reducer';
import login from '../redux/login/reducer';

const middleware = routerMiddleware(browserHistory);
let appReducers = combineReducers({
    games,
    login,
    form: formReducer
})

export default createStore(appReducers, applyMiddleware(thunk, middleware));
