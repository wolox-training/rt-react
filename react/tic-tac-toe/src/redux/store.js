import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form';

import games from '../redux/game/reducer';

let appReducers = combineReducers({
    games,
    form: formReducer
})

export default createStore(appReducers, applyMiddleware(thunk));
