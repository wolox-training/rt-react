import React from 'react';
import { Field, reduxForm } from 'redux-form';

import styles from '../styles.module.scss';
import validateActions from './validate';
import ImputLabel from './inputLabel';

function LoginForm(props) {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.container}>
        <Field 
          name="email" 
          label="Email"
          type="text" 
          className={styles.inputForm}
          component={ImputLabel} 
          validate={[validateActions.required, validateActions.email]}
        />
        <Field
          name="password"
          label="Password"
          type="password"
          className={styles.inputForm}
          component={ImputLabel}
          validate={[validateActions.required, validateActions.minValue8]}
        />
        <button type="submit" className={styles.submitLogin}>Login</button>
      </div>
    </form>
  );
};

LoginForm = reduxForm({
  form: 'loginGame'
})(LoginForm);
  
export default LoginForm;
