import React from 'react';
import { Field, reduxForm } from 'redux-form';

import styles from '../styles.module.scss';
import validateActions from './validate';
import ImputLabel from './inputLabel';

import { LOGIN_FIELDS, LABELS, TYPE_FIELDS } from '../constants';

function LoginForm(props) {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.container}>
        <Field 
          name={LOGIN_FIELDS.email} 
          label={LABELS.email}
          type={TYPE_FIELDS.text} 
          className={styles.inputForm}
          component={ImputLabel} 
          validate={[validateActions.required, validateActions.email]}
        />
        <Field
          name={LOGIN_FIELDS.password}
          label={LABELS.password}
          type={TYPE_FIELDS.password}
          className={styles.inputForm}
          component={ImputLabel}
          validate={[validateActions.required, validateActions.minValuePassword]}
        />
        <button type={TYPE_FIELDS.submit} className={styles.submitLogin}>Login</button>
      </div>
    </form>
  );
};

LoginForm = reduxForm({
  form: 'loginGame'
})(LoginForm);
  
export default LoginForm;
