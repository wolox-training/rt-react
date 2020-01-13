import loginService from '../../services/LoginService';
import { push, goBack } from 'connected-react-router';
import { createTypes } from 'redux-recompose';

import { ROUTES } from '~constants/routes';

import { withPostSuccess, withFailure, withSuccess } from 'redux-recompose';

import { TOKEN_GAME } from '../../constants/auth';

export const actions = createTypes([
  'LOGIN_USER',
  'SET_TOKEN',
  'SET_TOKEN_FROM_LS'
], '@LOGIN');

const actionCreators = {
  loginUser: (email, password) => ({
    type: actions.LOGIN_USER,
    service: loginService.login,
    payload: {email, password},
    injections: [
      withPostSuccess((dispatch, response, state) => {
        localStorage.setItem(TOKEN_GAME, response.data.token);
        dispatch(actionCreators.setSession(response.data.token));
      }),
      withFailure((dispatch, response, state) => {
        alert('Denied Access');
      })
    ]
  }),
  setToken: token => ({
    type: actions.SET_TOKEN,
    target: 'token',
    payload: token
  }),
  setSession: token => dispatch => {
    dispatch(actionCreators.setToken(token));
    dispatch(push(ROUTES.game));
  },
  logout: () => dispatch => {
    localStorage.removeItem(TOKEN_GAME);
    dispatch(actionCreators.clearToken);
    dispatch(push(ROUTES.login));
  },
  clearToken: () => ({
    type: actions.CLEAR_TOKEN
  }),
  goBackPage: () => dispatch => {
    dispatch(goBack());
  }
}

export default actionCreators;
