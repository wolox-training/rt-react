import React from 'react';
import { connect } from 'react-redux';

import LoginForm from './components/loginForm';

import actionCreators from '../../../redux/login/actions';

class Login extends React.Component {
  submit = values => {
    this.props.loginUser(values.email, values.password);
  };

  render() {
    return <LoginForm onSubmit={this.submit} />
  };
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  loginUser: (email, password) => dispatch(actionCreators.loginUser(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
