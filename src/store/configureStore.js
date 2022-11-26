import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import expenseReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';
import authReducer from "../reducers/auth";



// Store creation

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  const store = createStore(combineReducers({
    expenses: expenseReducer,
    filters: filterReducer,
    auth: authReducer
  }),
    composeEnhancer(applyMiddleware(thunk))
  );
  return store
}

export default configureStore;