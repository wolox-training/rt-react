import React from 'react';
import { connect } from 'react-redux';

import LoginForm from './components/loginForm';

import actionCreators from '../../../redux/login/actions';

class Login extends React.Component {
  componentDidMount() {
    const tokenGame = localStorage.getItem('tokenGame');
    if (tokenGame) this.props.setTokenFromLocalStorage(tokenGame);
  }

  submit = ({ email, password}) => {
    this.props.loginUser(email, password);
  };

  render() {
    return <LoginForm onSubmit={this.submit} />
  };
}

const mapDispatchToProps = dispatch => ({
  loginUser: (email, password) => dispatch(actionCreators.loginUser(email, password)),
  setTokenFromLocalStorage: token => dispatch(actionCreators.setTokenFromLocalStorage(token))
});

export default connect(null, mapDispatchToProps)(Login);
