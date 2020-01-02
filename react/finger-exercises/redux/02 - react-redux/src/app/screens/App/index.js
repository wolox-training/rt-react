import React, { Component, Fragment } from 'react';
import store from '@redux/store';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import { connect } from 'react-redux';
import actionsCreators from '@redux/book/actions';

import Book from './components/Book';
import Search from './components/Search';
import ShoppingCart from './components/ShoppingCart';
import styles from './styles.scss';

class App extends Component {
  componentDidMount() {
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      // eslint-disable-next-line react/prop-types
      books: this.props.getBooks()
    });
  }

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
    const showButton = !this.props.bookSelected.some(el => el.id === item.id);
    const configButton = showButton ? this.CONFIGURATION_BUTTON.add : this.CONFIGURATION_BUTTON.remove;
    return <Book key={item.id} data={item} configButton={configButton} />;
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className={styles.container}>
          <Search onSearch={this.props.onSearch} />
          {this.props.books.length ? (
            this.props.books.map(this.renderBooks)
          ) : (
            <div className={styles.noData}>
              <h2 className={styles.title}>No Data</h2>
            </div>
          )}
        </div>
        {this.props.bookSelected.length ? (
          <ShoppingCart data={this.props.bookSelected} addItem={this.addItem} removeItem={this.removeItem} />
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
  getBooks: () => dispatch(actionsCreators.getBooks()),
  onSearch: value => dispatch(actionsCreators.searchBook(value))
});

export default connect(mapStateToProps, mapToDispatchToProps)(App);
