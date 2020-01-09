import React from 'react';
import styles from '../styles.module.scss';

function ImputLabel({ input, label, type, className, meta: { touched, error, warning }}) {
	return (
    <div>
      <label className={styles.labelForm}>{label}</label>
      <div className={styles.inputContainer}>
        <input {...input} className={className} placeholder={label} type={type} />
        {touched && ((error && <span className={styles.errorMsg}>{error}</span>) || warning && <span>{warning}</span>)}
      </div>
    </div>
  );
}
	
export default ImputLabel;
