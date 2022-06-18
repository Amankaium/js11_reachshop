import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware} from 'redux';
import themeReducer from "./shopredux/reducer";
import {Provider} from 'react-redux';
// import {myLogger} from './middleware/logger'
import thunk from 'redux-thunk'


// let store = createStore(themeReducer, applyMiddleware(myLogger))
let store = createStore(themeReducer, applyMiddleware(thunk))

// store.subscribe(() => {
//   console.log(store.getState())
//   // theme = store.getState().value
// })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
