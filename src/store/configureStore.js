import { createStore, combineReducers } from "redux";
import expenseReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';

// Store creation

const configureStore = () => {
  const store = createStore(combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
  }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store
}

export default configureStore;