import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const Square = (props) => (
  <button
    type="button"
    className={styles.square}
    // eslint-disable-next-line react/jsx-no-bind
    onClick={() => props.onClick()}
  >
    {props.value}
  </button>
);

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func
};

export default Square;
