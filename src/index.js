import React from 'react';
import ReactDOM from 'react-dom';

import { legacy_createStore as createStore} from 'redux'
import { Provider } from 'react-redux';

import App from './components/app';

import { redux } from './reducer';

const store = createStore(redux);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);