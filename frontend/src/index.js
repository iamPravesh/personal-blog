import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { Toaster } from 'react-hot-toast'

import './index.css';
import App from './App';

const store = createStore(reducer, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Toaster
      position="top-center"
      autoClose={3000}
      reverseOrder={false}
    />
    <App />
  </Provider>
);
