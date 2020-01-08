const initialState = {
  games: [],
  loadingOff: false
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'GET_MATCHES':
      return {
        ...state,
        loadingOff: false
      };
    case 'GET_MATCHES_SUCCESS':
      return {
        ...state,
        games: action.games,
        loadingOff: true
      }
    default:
      return state;
  }
}

export default reducer;
