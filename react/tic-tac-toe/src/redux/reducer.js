import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';


import games from '../redux/game/reducer';
import login from '../redux/login/reducer';

const createRootReducer = (history) => combineReducers({
	router: connectRouter(history),
	games,
	login,
	form: formReducer
})

export default createRootReducer;
