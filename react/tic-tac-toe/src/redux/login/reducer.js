const initialState = {
	isLogged: false,
	token: undefined
};

function reducer(state = initialState, action){
	switch(action.type) {
		case 'SAVE_TOKEN':
			return {
				...state,
				token: action.token
			};
		case 'USER_LOGGED':
			return {
				...state,
				isLogged: true
			}
		default:
			return state;
	}
};

export default reducer;
