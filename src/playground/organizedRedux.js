import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpress from './selectors/expenses';

const store = configureStore();
store.dispatch(addExpense({ description: 'water bill' }));
store.dispatch(addExpense({ description: 'gas bill' }));
// store.dispatch(setTextFilter('bill'));
store.dispatch(setTextFilter('gas'));
const state = store.getState();
const visibleExpenses = getVisibleExpress(state.expenses, state.filters);
console.log(visibleExpenses);