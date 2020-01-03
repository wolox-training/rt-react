import React, { PureComponent, Fragment } from 'react';
import { arrayOf, func } from 'prop-types';
import { bookSelectedPropType } from '@constants/propTypes';
import Button from '@components/Button';
import { connect } from 'react-redux';
import shoppingCartActions from '@redux/shoppingCart/actions';

import Item from './components/Item';
import styles from './styles.scss';

class ShoppingCart extends PureComponent {
  total = (accumulator, currentValue) => accumulator + currentValue.quantity;

  renderItem = item => {
    const { addItem, removeItem } = this.props;
    return <Item key={item.id} item={item} addItem={addItem} removeItem={removeItem} />;
  };

  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <Button className={styles.buttonCart} onClick={this.props.toggleContent}>
          <i className="fa fa-shopping-cart" />
        </Button>
        <div className={`${styles.container} ${this.props.open ? styles.open : ''}`}>
          <h1 className={styles.title}>Cart</h1>
          <ul className={styles.content}>{data.map(this.renderItem)}</ul>
          <h2 className={`${styles.title} ${styles.total}`}>Total: {data.reduce(this.total, 0)}</h2>
        </div>
      </Fragment>
    );
  }
}

ShoppingCart.propTypes = {
  data: arrayOf(bookSelectedPropType).isRequired,
  addItem: func.isRequired,
  removeItem: func.isRequired
};

const mapStateToProps = state => ({
  open: state.shoppingCart.open
});

const mapToDispatchToProps = dispatch => ({
  toggleContent: () => dispatch(shoppingCartActions.toggleContent())
});

export default connect(mapStateToProps, mapToDispatchToProps)(ShoppingCart);
