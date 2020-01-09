import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, withRouter } from 'react-router-dom';

import AuthorizatedRoute from './screens/Login/components/authorizatedRoute';
import Game from './screens/Game';
import Login from './screens/Login'

import '../scss/application.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/game" component={Game} />
        <Redirect to="/login" />
      </Switch> 
    </BrowserRouter>
  )
}

export default withRouter(App);
