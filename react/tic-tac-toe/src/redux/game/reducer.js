import matchesService from '../../services/MatchesService';

const initialState = {
  games: [],
  loadingOff: false
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'GET_MATCHES':
      matchesService.getMatches()
      .then(data => {
        return {
          ...state,
          games: [...state.games, ...data.data],
          loadingOff: true 
        }
      });
    default:
      return state;
  }
}

export default reducer;
