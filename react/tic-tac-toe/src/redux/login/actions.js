import loginService from '../../services/LoginService';
import { push } from 'connected-react-router';

import { TOKEN_GAME } from '~constants/auth';
import { ROUTES } from '~constants/routes';

const actionCreators = {
	loginUser: (email, password) => async dispatch => {
		const response = await loginService.login(email, password);
		if (response.ok) {
			dispatch(actionCreators.saveToken(response.data.token));
			localStorage.setItem(TOKEN_GAME, response.data.token);
			dispatch(push(ROUTES.game));
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
		dispatch(push(ROUTES.game));
	}
}

export default actionCreators;
