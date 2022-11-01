import moment from 'moment';
import expenseReducer from '../../reducers/expenses';
import { expenses } from '../fixtures/expenses';

test('should set default state', () => {
  const state = expenseReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual([
    expenses[0], expenses[2]
  ]);
})

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual(expenses);
})

test('should add an expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      id: '4',
      description: 'Milk',
      note: '',
      amount: 5,
      createdAt: moment(0).add(2, 'days').valueOf()
    }
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual([...expenses, action.expense]);
})

test('should edit expense by id', () => {
  const description = 'New description value';
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: { description }
  };
  const state = expenseReducer(expenses, action);
  expect(state[0].description).toBe(description)
});

test('should not edit expense if id not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      note: 'New note value'
    }
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual(expenses)
})