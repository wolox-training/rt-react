import loginService from '../../services/LoginService';
import { push } from 'connected-react-router';

const actionCreators = {
	loginUser: (email, password) => async dispatch => {
		const response = await loginService.login(email, password);
		if (response.ok) {
      dispatch(actionCreators.saveToken(response.data.token));
      localStorage.setItem('tokenGame', response.data.token);
      dispatch(push('/game'));
		} else {
			console.log(response.data);
			alert('Denied Access');
		}
	},
	saveToken: token => ({
		type: 'SAVE_TOKEN',
		token
	}),
	getUserLogged: () => ({
		type: 'GET_USER_LOGGED'
  }),
  setTokenFromLocalStorage: token => dispatch => {
    dispatch(actionCreators.saveToken(token));
    dispatch(push('game'));
  }
}

export default actionCreators;
