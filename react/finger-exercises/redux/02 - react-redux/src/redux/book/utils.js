export function filteredBooks(books, searchValue, originalData) {
  books = originalData;
  return books.filter(book => book.name.toLowerCase().search(searchValue) !== -1);
}

export function addToCart(booksAdded, book) {
  return [...booksAdded, book];
}

export function removeFromCart(booksInCart, bookId) {
  return booksInCart.filter(book => book.id !== bookId);
}

export function addItemToCart(booksInCart, bookId) {
  return booksInCart.map(book => {
    if (book.id === bookId) book.quantity += 1;
    return book;
  });
}
