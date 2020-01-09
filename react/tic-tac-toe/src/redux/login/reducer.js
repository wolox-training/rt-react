const initialState = {
	isLogged: false,
	token: undefined
};

function reducer(state = initialState, action){
	switch(action.type) {
		case 'LOGIN':
			return {
				...state,
				isLogged: true,
				token: action.token
			}
		default:
			return state;
	}
};

export default reducer;
