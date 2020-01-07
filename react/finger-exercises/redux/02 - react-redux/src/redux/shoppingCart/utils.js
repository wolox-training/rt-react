export function getTotalBooks(books) {
  return books.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0);
}
