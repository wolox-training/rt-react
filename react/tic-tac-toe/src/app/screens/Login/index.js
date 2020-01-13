import React from 'react';
import { connect } from 'react-redux';

import LoginForm from './components/loginForm';

import actionCreators from '../../../redux/login/actions';

class Login extends React.Component {
  submit = ({ email, password }) => {
    this.props.loginUser(email, password);
  };

  render() {
    return <LoginForm onSubmit={this.submit} />
  };
}

const mapDispatchToProps = dispatch => ({
  loginUser: (email, password) => dispatch(actionCreators.loginUser(email, password))
});

export default connect(null, mapDispatchToProps)(Login);
