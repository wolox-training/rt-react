import { actions } from './actions';
import { filteredBooks, addToCart, removeFromCart, addItemToCart } from './utils';

const initialState = {
  books: [],
  bookSelected: [],
  originalData: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_BOOKS:
      return {
        ...state,
        books: action.payload,
        originalData: action.payload
      };
    case actions.ADD_TO_CART:
      return {
        ...state,
        bookSelected: addToCart(state.bookSelected, action.payload.book)
      };
    case actions.ADD_ITEM:
      return {
        ...state,
        bookSelected: addItemToCart(state.bookSelected, action.payload)
      };
    case actions.REMOVE_ITEM:
      return {
        ...state,
        bookSelected: removeFromCart(state.bookSelected, action.payload.bookId)
      };
    case actions.SEARCH_ITEM:
      return {
        ...state,
        books: filteredBooks(state.originalData, action.payload.search)
      };
    default:
      return state;
  }
}

export default reducer;
