import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from "react-redux";

import Dashboard from './dashboard/Dashboard';
import rootReducer from './reducers';
import './index.css';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Dashboard />
  </Provider>
, document.getElementById('root'));
