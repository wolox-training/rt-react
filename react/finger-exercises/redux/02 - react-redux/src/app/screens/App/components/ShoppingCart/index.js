import React, { PureComponent, Fragment } from 'react';
import { arrayOf, func, number, bool } from 'prop-types';
import { bookSelectedPropType } from '@constants/propTypes';
import Button from '@components/Button';
import { connect } from 'react-redux';
import shoppingCartActions from '@redux/shoppingCart/actions';

import Item from './components/Item';
import styles from './styles.scss';

const classNames = require('classnames');

class ShoppingCart extends PureComponent {
  renderItem = item => {
    const { addItem, removeItem } = this.props;
    return <Item key={item.id} item={item} addItem={addItem} removeItem={removeItem} />;
  };

  render() {
    const { data, toggleContent, getTotalCart, total, open } = this.props;
    getTotalCart(data);
    return (
      <Fragment>
        <Button className={styles.buttonCart} onClick={toggleContent}>
          <i className="fa fa-shopping-cart" />
        </Button>
        <div className={classNames(styles.container, { [styles.open]: open })}>
          <h1 className={styles.title}>Cart</h1>
          <ul className={styles.content}>{data.map(this.renderItem)}</ul>
          <h2 className={`${styles.title} ${styles.total}`}>Total: {total}</h2>
        </div>
      </Fragment>
    );
  }
}

ShoppingCart.propTypes = {
  data: arrayOf(bookSelectedPropType).isRequired,
  addItem: func.isRequired,
  removeItem: func.isRequired,
  toggleContent: func,
  getTotalCart: func,
  total: number,
  open: bool
};

const mapStateToProps = state => ({
  open: state.shoppingCart.open,
  total: state.shoppingCart.total
});

const mapToDispatchToProps = dispatch => ({
  toggleContent: () => dispatch(shoppingCartActions.toggleContent()),
  getTotalCart: data => dispatch(shoppingCartActions.getTotalCart(data))
});

export default connect(mapStateToProps, mapToDispatchToProps)(ShoppingCart);
