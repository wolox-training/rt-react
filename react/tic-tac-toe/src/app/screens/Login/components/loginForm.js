import React from 'react';
import { Field, reduxForm } from 'redux-form';

import styles from '../styles.module.scss';
import validateActions from './validate';
import renderField from './renderInput';

let LoginForm = props => {
  const { handleSubmit } = props;
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <Field 
          name="email" 
          label="Email"
          type="text" 
          className={styles.inputForm}
          component={renderField} 
          validate={[validateActions.required, validateActions.email]}
        />
        <Field
          name="password"
          label="Password"
          type="password"
          className={styles.inputForm}
          component={renderField}
          validate={[validateActions.required, validateActions.minValue8]}
        />
        <button type="submit" className={styles.submitLogin}>Login</button>
      </form>
    </div>
  );
};

LoginForm = reduxForm({
  form: 'loginGame'
})(LoginForm);
  
export default LoginForm;
