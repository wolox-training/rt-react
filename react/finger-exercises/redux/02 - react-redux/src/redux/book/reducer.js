import { actions } from './actions';
import { filteredBooks, addToCart, removeFromCart } from './utils';

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
    case actions.ADD_TO_CART:
      return {
        ...state,
        bookSelected: addToCart(state.bookSelected, action.payload.book)
      };
    case actions.ADD_ITEM: // TODO to implement the logic
      return { ...state };
    case actions.REMOVE_ITEM:
      return {
        ...state,
        bookSelected: removeFromCart(state.bookSelected, action.payload.bookId)
      };
    case actions.SEARCH_ITEM:
      state.books = state.originalData;
      return {
        ...state,
        books: filteredBooks(state.books, action.payload.search)
      };
    default:
      return state;
  }
}

export default reducer;
