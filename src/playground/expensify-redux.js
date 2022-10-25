import { createStore, combineReducers } from "redux";
import { addExpense, removeExpense, editExpense } from "./actions/expenses";

// SET_TEXT_FILTER
const setTextFilter = (text) => ({
  type: 'SET_TEXT_FILTER',
  text
});
// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});
// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});
// SET_START_DATE
const setStartDate = (num) => ({
  type: 'SET_START_DATE',
  num,
});
// SET_END_DATE
const setEndDate = (num) => ({
  type: 'SET_END_DATE',
  num,
});

// Expenses Reducer
const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((ele) => {
        if (ele.id === action.id) {
          return { ...ele, ...action.updates }
        } else {
          return ele;
        }
      });
    default:
      return state;
  }
};

// Filter Reducer

const filterReducerDefault = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filterReducer = (state = filterReducerDefault, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.text };
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date' };
    case 'SORT_BY_AMOUNT':
      return { ...state, sortBy: 'amount' };
    case 'SET_START_DATE':
      return { ...state, startDate: action.num };
    case 'SET_END_DATE':
      return { ...state, endDate: action.num };
    default:
      return state;
  }
};

// Get visible expenses
const getVisibleExpress = (expenses, { text, sortBy, startDate, endDate }) => {

  return expenses.filter((expense) => {
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    return textMatch && startDateMatch && endDateMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt >= b.createdAt ? -1 : 1
    }
    if (sortBy === 'amount') {
      return a.amount >= b.amount ? -1 : 1
    }

  });
};

// Store creation
const store = createStore(combineReducers({
  expenses: expenseReducer,
  filters: filterReducer
}));

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpress(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense(
  {
    description: 'Rent',
    amount: 100,
    createdAt: 1000
  }
));

const expenseTwo = store.dispatch(addExpense(
  {
    description: 'Coffee',
    amount: 300,
    createdAt: -1000
  }
));

// store.dispatch(removeExpense({
//   id: expenseOne.expense.id,
// }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 800 }));

// store.dispatch(setTextFilter('mmm'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1259));

const demoState = {
  expenses: [{
    id: 'pojieowajfie',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
};
