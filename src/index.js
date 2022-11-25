import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';

import reportWebVitals from './reportWebVitals';
import './index.scss';
import './firebase/firebase';
import { firebase } from './firebase/firebase';
//import './playground/promises';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {<p>Loading ...</p>}
  </React.StrictMode>
);

store.dispatch(startSetExpenses())
  .then(() => {
    root.render(
      <React.StrictMode>
        {jsx}
      </React.StrictMode>
    );
  })

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('log in');
  } else {
    console.log('log out');
  }
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
