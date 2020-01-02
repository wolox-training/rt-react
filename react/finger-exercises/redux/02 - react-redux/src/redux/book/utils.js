export function filteredBooks(books, searchValue) {
  return books.filter(book => book.name.toLowerCase().search(searchValue) !== -1);
}
