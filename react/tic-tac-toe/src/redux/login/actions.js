import loginService from '../../services/LoginService';

const actionCreators = {
	loginUser: (email, password) => async dispatch => {
		const response = await loginService.login(email, password);
		console.log(`Token: ${response.data.token}`);
	}	
}

export default actionCreators;
