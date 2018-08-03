import { addExpense, removeExpense, editExpense } from '../../actions/expenses';
import uuid from 'uuid';
// use toEqual method to match arrays and objects
// use toBe method to match numbers and strings

test('should setup and remove action expense', () => {
  const action = removeExpense({id: 'AABB123'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 'AABB123'
  });
});

test('should setup and edit expense', () => {
  const action = editExpense('AABB123', 'Update 1');
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'AABB123',
    updates: 'Update 1'
  });
});

// use any(String/Number) method to match any String/numbers
// this is useful for dynamic inputs like the id below
test('should setup and add expense', () => {
  const expenseData = {
    description: 'One',
    note: 'Two',
    amount: 100,
    createdAt: 202
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      ...expenseData
    }
  })
})

test('should return default object from addExpense action', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  });
})
