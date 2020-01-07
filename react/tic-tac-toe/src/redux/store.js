import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import games from '../redux/game/reducer';

export default createStore(games, applyMiddleware(thunk));