import {
  addExpense,
  editExpense,
  removeExpense,
  startAddExpense } from '../../actions/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expenses from '../fixtures/expenses';

// create mock store with middleware thunk
const createMockStore = configureMockStore([thunk]);

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
test('should setup and add expense with default values', () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

test('should add expense to database and store', (done) => {
  // create mock store
  const store = createMockStore({});
  // create expenseData for test
  const expenseData = {
    description: 'Washmachine',
    note: 'New device for washing clothes',
    amount: 1000,
    createdAt: 200
  };

  // dispatch startAddExpense action
  store.dispatch(startAddExpense(expenseData)).then(() => {
    // set expectations
    expect(3).toBe(3);
    // call done
    done();
  })
});

test('should add expense with defaults to database and store', () => {

});

/*
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
*/
