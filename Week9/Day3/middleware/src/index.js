import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import{rootReducer} from './redux/reducers.js'
import{createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {myLogger} from './redux/logger.js'

  


const store = createStore(rootReducer, applyMiddleware(thunk, myLogger));


// creating our own logger here

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

