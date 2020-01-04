const actionsCreators = {
  toggleContent: () => ({
    type: 'TOGGLE_CONTENT'
  }),
  getTotalCart: booksAdded => ({
    type: 'GET_TOTAL_CART',
    booksAdded
  })
};

export default actionsCreators;
