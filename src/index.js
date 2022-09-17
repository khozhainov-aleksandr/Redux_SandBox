import React from 'react';
import ReactDOM from 'react-dom';

import { legacy_createStore as createStore} from 'redux'
import { bindActionCreators } from 'redux';

import MainCounter from './mainCounter';

import * as actions from './actions';
import { redux } from './reducer';

const store = createStore(redux);
const { dispatch } = store;

const {inc, dec, rnd} = bindActionCreators(actions, dispatch);

const update = () => {
  ReactDOM.render(
    <MainCounter
      counter={store.getState()}
      inc={inc}
      dec={dec}
      rnd={() => {
        const value = Math.floor(Math.random() * 10);
        rnd(value);
      }}
    />, 
    document.getElementById('root')
  );
};

update();
store.subscribe(update);