import { actions } from '~redux/game/actions';
import { createReducer, completeReducer } from 'redux-recompose';

const initialState = {
  games: [],
  loadingOff: false
}

const reducerDescription = {
  primaryActions: [
    actions.GET_MATCHES
  ]
}

const reducer = createReducer(initialState, completeReducer(reducerDescription));

export default reducer;
