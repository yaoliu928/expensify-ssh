// Expenses Reducer
const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      console.log('action', action);
      return state.filter(ele => ele.id !== action.id);
    case 'EDIT_EXPENSE':
      console.log(action);
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

export default expenseReducer;