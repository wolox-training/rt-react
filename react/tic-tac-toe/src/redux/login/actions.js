import { push } from 'react-router-redux';

import loginService from '../../services/LoginService';

const actionCreators = {
	loginUser: (email, password) => async dispatch => {
		const response = await loginService.login(email, password);
		if (response.ok) {
			console.log('User logged');
			dispatch(actionCreators.login(response.data.token));
			dispatch(push('/game'));
		} else {
			console.log(response.data);
			alert('Denied Access');
		}
	},
	login: token => ({
		type: 'LOGIN',
		token
	})
}

export default actionCreators;
