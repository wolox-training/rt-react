import loginService from '../../services/LoginService';
import { push } from 'connected-react-router';

import { TOKEN_GAME } from '~constants/auth';

const actionCreators = {
	loginUser: (email, password) => async dispatch => {
		const response = await loginService.login(email, password);
		if (response.ok) {
			dispatch(actionCreators.saveToken(response.data.token));
			localStorage.setItem(TOKEN_GAME, response.data.token);
			dispatch(push('/game'));
		} else {
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
		dispatch(push('/game'));
	},
	logout: () => dispatch => {
		localStorage.removeItem(TOKEN_GAME);
		dispatch(actionCreators.clearToken());
		dispatch(push('/login'));
	},
	clearToken: () => ({
		type: 'CLEAR_TOKEN'
	})
}

export default actionCreators;
