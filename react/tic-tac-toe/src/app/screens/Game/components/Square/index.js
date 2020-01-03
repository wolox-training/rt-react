import React from 'react';
import { string } from 'prop-types';

import styles from './styles.module.scss';

function Square (props) {
  const onHandleClick = () => {
    const { id, onClick } = props;
    onClick(id);
  }

  return (
    <button type="button" 
      className={styles.square} 
      onClick={onHandleClick}
    >
      {props.value}
    </button>
  );
}

Square.prototypes = {
  value: string
}
  
export default Square;
