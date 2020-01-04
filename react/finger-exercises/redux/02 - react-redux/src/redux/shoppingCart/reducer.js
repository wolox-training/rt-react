import { getTotalBooks } from './utils';

const initialState = {
  open: false,
  total: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_CONTENT':
      return {
        ...state,
        open: !state.open
      };
    case 'GET_TOTAL_CART':
      return {
        ...state,
        total: getTotalBooks(action.booksAdded)
      };
    default:
      return state;
  }
}

export default reducer;
