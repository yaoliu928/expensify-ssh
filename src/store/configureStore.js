import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import expenseReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';
import thunk from 'redux-thunk';

// Store creation

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  const store = createStore(combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
  }),
    composeEnhancer(applyMiddleware(thunk))
  );
  return store
}

export default configureStore;