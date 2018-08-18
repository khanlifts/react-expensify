import uuid from 'uuid';
// import database
import database from '../firebase/firebase';

// ADD_EXPENSE ACTION
// switch parameter to expense
// remove the rest except type
export const addExpense = (expense = {}) => ({
  type: 'ADD_EXPENSE',
  expense
});

// async action creator
export const startAddExpense = (expenseData = {}) => {
  // return a function with parameter dispatch
  return (dispatch) => {
    // data setup:
    const { description = '', note = '', amount = 0, createdAt = 0 } = expenseData;
    const expense = { description, note, amount, createdAt };
    // push object to database on child expenses then dispatch addExpense
    // to update redux store
    return database.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  };
};

// REMOVE_EXPENSE ACTION
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE ACTION
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});
