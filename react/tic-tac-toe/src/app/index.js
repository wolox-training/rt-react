import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AuthorizatedRoute from './screens/Login/components/authorizatedRoute';
import Game from './screens/Game';
import Login from './screens/Login'

import '../scss/application.scss';

function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <AuthorizatedRoute path="/game" component={Game} />
      <Redirect to="/login" />
    </Switch> 
  )
}

const mapStateToProps = state => ({
  isLogged: state.login.isLogged,
  token: state.login.token
});

export default connect(mapStateToProps)(App);
