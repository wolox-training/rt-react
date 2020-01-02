import { actions } from './actions';

const initialState = {
  books: [],
  bookSelected: [],
  originalData: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_BOOKS:
      state.originalData = action.payload;
      return {
        ...state,
        books: action.payload
      };
    case actions.ADD_TO_CART: // TODO to implement the logic
      return { ...state };
    case actions.ADD_ITEM: // TODO to implement the logic
      return { ...state };
    case actions.REMOVE_ITEM: // TODO to implement the logic
      return { ...state };
    case actions.SEARCH_ITEM:
      state.books = state.originalData;
      return {
        ...state,
        books: state.books.filter(book => book.name.toLowerCase().search(action.payload) !== -1)
      };
    default:
      return state;
  }
}

export default reducer;
