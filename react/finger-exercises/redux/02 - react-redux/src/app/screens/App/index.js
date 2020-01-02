import React, { Component, Fragment } from 'react';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import { connect } from 'react-redux';
import bookActions from '@redux/book/actions';

import Book from './components/Book';
import Search from './components/Search';
import ShoppingCart from './components/ShoppingCart';
import styles from './styles.scss';

class App extends Component {
  // eslint-disable-next-line react/prop-types
  componentDidMount = () => this.props.getBooks();

  // TODO to implement the dispatch
  addToCart = item => {};

  // TODO to implement the dispatch
  addItem = itemId => {};

  // TODO to implement the dispatch
  removeItem = itemId => {};

  CONFIGURATION_BUTTON = {
    add: {
      text: 'Add to cart',
      function: this.addToCart
    },
    remove: {
      text: 'Remove',
      function: this.removeItem,
      isDanger: true
    }
  };

  renderBooks = item => {
    const { bookSelected } = this.props;
    const showButton = !bookSelected.some(el => el.id === item.id);
    const configButton = showButton ? this.CONFIGURATION_BUTTON.add : this.CONFIGURATION_BUTTON.remove;
    return <Book key={item.id} data={item} configButton={configButton} />;
  };

  render() {
    const { onSearch, books, bookSelected } = this.props;

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
        {bookSelected.length ? (
          <ShoppingCart data={bookSelected} addItem={this.addItem} removeItem={this.removeItem} />
        ) : null}
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books,
  bookSelected: state.bookSelected
});

const mapToDispatchToProps = dispatch => ({
  getBooks: () => dispatch(bookActions.getBooks()),
  onSearch: value => dispatch(bookActions.searchBook(value))
});

export default connect(mapStateToProps, mapToDispatchToProps)(App);
