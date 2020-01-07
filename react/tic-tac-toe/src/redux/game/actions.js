import matchesService from '../../services/MatchesService';

const actionCreators = {
  getMatches: () => async dispatch => {
    const response = await matchesService.getMatches();
    if (response.ok) {
      dispatch(actionCreators.getMatchesSuccess(response.data));
    }
  },
  getMatchesSuccess: (games) => ({
    type: 'GET_MATCHES_SUCCESS',
    games
  })
};

export default actionCreators;
