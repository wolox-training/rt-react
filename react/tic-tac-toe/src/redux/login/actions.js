import loginService from '../../services/LoginService';
import { push } from 'connected-react-router';

const actionCreators = {
	loginUser: (email, password) => async dispatch => {
		const response = await loginService.login(email, password);
		if (response.ok) {
			dispatch(actionCreators.saveToken(response.data.token));
			dispatch(push('/game'));
			dispatch(actionCreators.userLogged());
		} else {
			console.log(response.data);
			alert('Denied Access');
		}
	},
	saveToken: token => ({
		type: 'SAVE_TOKEN',
		token
	}),
	userLogged: () => ({
		type: 'USER_LOGGED'
	})
}

export default actionCreators;
