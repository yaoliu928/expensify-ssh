import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test('should setup removeExpense action object', () => {
  const action = removeExpense({ id: 'abc123' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 'abc123'
  })
});

test('should setup editExpense action object', () => {
  const action = editExpense('abc123', { note: 'New note value' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'abc123',
    updates: { note: 'New note value' }
  })
});

test('should setup addExpense action object with provided data', () => {
  const expenseData = {
    description: 'dinner',
    note: 'pizza',
    amount: 10.3,
    createdAt: 989000,
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String),
    }
  })
});

test('should setup addExpense action object with default data', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  })
})