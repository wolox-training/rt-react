import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import configureStore, { history } from './redux/store';
import App from './app';
import './config/i18n';
import './scss/application.scss';
import { register } from './serviceWorker';

const store = configureStore();

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <BrowserRouter>
          <AppContainer>
            <App />
          </AppContainer>
        </BrowserRouter>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  );
};

// Render once
render(App);

register();

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app', () => {
    render(App);
  });
}
