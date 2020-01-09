const initialState = {
	token: undefined
};

function reducer(state = initialState, action){
	switch(action.type) {
		case 'SAVE_TOKEN':
			return {
				...state,
				token: action.token
			}
		default:
			return state;
	}
};

export default reducer;
