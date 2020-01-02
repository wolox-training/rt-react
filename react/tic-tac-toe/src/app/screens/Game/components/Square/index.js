import React from 'react';

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
  
export default Square;
