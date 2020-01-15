import { createReducer, completeReducer, onReadValue } from 'redux-recompose';

import { actions } from './actions';

const initialState = {
	isLogged: false,
	token: null
};

const reducerDescription = {
  primaryActions: [actions.LOGIN_USER],
  override: {
    [actions.SET_TOKEN]: (state, action) => ({
      ...state,
      token: action.payload,
      isLogged: true
    })
  }
};

const reducer = createReducer(initialState, completeReducer(reducerDescription));

export default reducer;
