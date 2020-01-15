import { createTypes } from 'redux-recompose';
import matchesService from '../../services/MatchesService';

export const actions = createTypes([
  'GET_MATCHES'
], '@GAMES');

const actionCreators = {
  getMatches: games => ({
    type: actions.GET_MATCHES,
    target: 'games',
    service: matchesService.getMatches,
    payload: games
  })
};

export default actionCreators;
