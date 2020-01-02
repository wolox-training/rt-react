import React from 'react';
import ReactDOM from 'react-dom';
import App from '@screens/App';
import './scss/index.scss';
// eslint-disable-next-line import/first
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
