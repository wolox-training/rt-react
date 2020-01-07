import matchesService from '../../services/MatchesService';

const actionCreators = {
  getMatches: () => async dispatch => {
    dispatch({ type: 'GET_MATCHES'});
    const response = await matchesService.getMatches();
    if (response.ok) {
      dispatch({
        type: 'GET_MATCHES',
        games: response.data
      });
    }
  }
}

export default actionCreators;
