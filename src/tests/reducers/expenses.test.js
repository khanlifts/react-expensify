import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should setup default expense value', () => {
  const initAction = {type: '@@INIT'}
  const state = expensesReducer(undefined, initAction);
  const defaultState = [];
  // expect to equal the default state
  expect(state).toEqual(defaultState)
});

// REMOVE_EXPENSE
test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove any expenses', () => {
  const action = {type: 'REMOVE_EXPENSE'};
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

// ADD_EXPENSE
// assign the call of expensesReducer with params of undefined state
// and action object with init type to state
test('should add expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: expenses[0]
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[1], expenses[2], expenses[0]]);
});


// EDIT_EXPENSE
test('should edit one expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount: 2000
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(2000);
});

test('should not edit expense if not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '5',
    updates: {
      amount: 6000
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
