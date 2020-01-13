import { createReducer, completeReducer } from 'redux-recompose';

import { actions } from './actions';

const initialState = {
  games: []
}

const reducerDescription = {
  primaryActions: [
    actions.GET_MATCHES
  ]
}

const reducer = createReducer(initialState, completeReducer(reducerDescription));

export default reducer;
