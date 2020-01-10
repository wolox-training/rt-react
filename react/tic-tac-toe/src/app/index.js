import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import AuthorizedRoute from './screens/Login/components/authorizedRoute';
import Game from './screens/Game';
import Login from './screens/Login'

import '../scss/application.scss';

function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <AuthorizedRoute path="/game" component={Game} />
      <Redirect to="/login" />
    </Switch> 
  )
}

export default App;
