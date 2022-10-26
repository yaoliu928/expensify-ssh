import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';
import { addExpense, removeExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpress from './selectors/expenses';

import reportWebVitals from './reportWebVitals';
import './index.scss';

const store = configureStore();
store.dispatch(addExpense({ description: 'Water bill', amount: 1, createdAt: 3 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 2, createdAt: 2 }));
store.dispatch(addExpense({ description: 'Rent', amount: 3, createdAt: 1 }));
// store.dispatch(setTextFilter('gas'));

// setTimeout(() => {
//   store.dispatch(setTextFilter('bill'));
// }, 3000);

const state = store.getState();
const visibleExpenses = getVisibleExpress(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {jsx}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
