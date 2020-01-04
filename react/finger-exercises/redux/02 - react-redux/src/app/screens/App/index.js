import React, { Component, Fragment } from 'react';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import { connect } from 'react-redux';
import bookActions from '@redux/book/actions';
import { func, array } from 'prop-types';

import Book from './components/Book';
import Search from './components/Search';
import ShoppingCart from './components/ShoppingCart';
import styles from './styles.scss';

class App extends Component {
  componentDidMount = () => this.props.getBooks();

  CONFIGURATION_BUTTON = {
    add: {
      text: 'Add to cart',
      function: this.props.addToCart
    },
    remove: {
      text: 'Remove',
      function: this.props.removeItem,
      isDanger: true
    }
  };

  renderBooks = item => {
    const { bookSelected } = this.props;
    const showButton = !bookSelected.some(({ id }) => id === item.id);
    const configButton = showButton ? this.CONFIGURATION_BUTTON.add : this.CONFIGURATION_BUTTON.remove;
    return <Book key={item.id} data={item} configButton={configButton} />;
  };

  render() {
    const { onSearch, books, bookSelected, removeItem } = this.props;

    return (
      <Fragment>
        <Navbar />
        <div className={styles.container}>
          <Search onSearch={onSearch} />
          {books.length ? (
            books.map(this.renderBooks)
          ) : (
            <div className={styles.noData}>
              <h2 className={styles.title}>No Data</h2>
            </div>
          )}
        </div>
        {bookSelected.length && (
          <ShoppingCart data={bookSelected} addItem={this.props.addItem} removeItem={removeItem} />
        )}
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books.books,
  bookSelected: state.books.bookSelected
});

const mapToDispatchToProps = dispatch => ({
  getBooks: () => dispatch(bookActions.getBooks()),
  onSearch: value => dispatch(bookActions.searchBook(value)),
  addToCart: item => dispatch(bookActions.addToCart(item)),
  removeItem: itemId => dispatch(bookActions.removeItem(itemId)),
  addItem: itemId => dispatch(bookActions.addItem(itemId))
});

App.prototypes = {
  onSearch: func,
  getBooks: func,
  removeItem: func,
  bookSelected: array
};

export default connect(mapStateToProps, mapToDispatchToProps)(App);
