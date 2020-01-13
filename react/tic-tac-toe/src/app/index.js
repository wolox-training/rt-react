import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import AuthorizedRoute from './screens/Login/components/authorizedRoute';
import Game from './screens/Game';
import Login from './screens/Login';
import NotFound from './screens/NotFound';

import '../scss/application.scss';
import { ROUTES } from '../constants/routes';

function App() {
  return (
    <Switch>
      <Route path={ROUTES.login} component={Login} />
      <AuthorizedRoute path={ROUTES.game} component={Game} />
      <Route path={ROUTES.notFound} component={NotFound}/>
    </Switch> 
  )
}

export default App;
