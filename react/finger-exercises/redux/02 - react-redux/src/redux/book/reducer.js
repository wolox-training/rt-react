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
        bookSelected: state.bookSelected.map(book => {
          if (book.id === action.payload) book.quantity += 1;
          return book;
        })
      };
    case actions.REMOVE_ITEM:
      return {
        ...state,
        bookSelected: removeFromCart(state.bookSelected, action.payload.bookId)
      };
    case actions.SEARCH_ITEM:
      return {
        ...state,
        books: filteredBooks(state.books, action.payload.search, state.originalData)
      };
    default:
      return state;
  }
}

export default reducer;
