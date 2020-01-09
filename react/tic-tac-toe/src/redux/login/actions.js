import loginService from '../../services/LoginService';

const actionCreators = {
	loginUser: (email, password) => async dispatch => {
		const response = await loginService.login(email, password);
		if (response.ok) {
			dispatch(actionCreators.saveToken(response.data.token));
		} else {
			console.log(response.data);
			alert('Incorrect Password');
		}
	},
	saveToken: token => ({
		type: 'SAVE_TOKEN',
		token
	})
}

export default actionCreators;
