import { createReducer, completeReducer } from 'redux-recompose';

import { actions } from './actions';

const initialState = {
	isLogged: false,
	token: undefined
};

const reducerDescription = {
  primaryActions: [actions.LOGIN_USER],
  override: {
    [actions.SET_TOKEN]: (state, action) => ({
      ...state,
      token: action.payload,
      isLogged: true
    }),
    [actions.CLEAR_TOKEN]: (state, action) => ({
      ...state,
      token: undefined
    })
  }
};

const reducer = createReducer(initialState, completeReducer(reducerDescription));

export default reducer;
