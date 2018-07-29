// import createStore combineReducers from redux and uuid from uuid
import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE ACTION
// Destructure input object with description, note, amount, createdAt and
// set default empty object.
// Return object with type 'ADD_EXPENSE' and an expense object with id from uuid
// andthe attributes
const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
  } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE ACTION
// Destructure id and set empty object as default
// Return object with type of REMOVE_EXPENSE and id set to id
const removeExpense = (({ id }) = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE ACTION
// return object with type, id, updates
// no destructuring or default empty object
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// SET_TEXT_FILTER ACTION
// return object with type and text
// set text default to empty string


// SORT_BY_DATE ACTION
// return just object with type and no input


// SORT_BY_AMOUNT ACTION
// return just object with type and no input


// SET_START_DATE ACTION
// return object with type and startDate
// set startDate default to undefined

// SET_END_DATE ACTION
// return object with type and endDateD
// set endDate default to undefined


// Expenses Reducer
// set expensesReducerDefaultState to empty array and use it as default in
// the reducer


// expensesReducer takes state and action
// switch by action.type

// case ADD_EXPENSE: return an array of the states and the ONE expense passed from
// addExpense action

// case REMOVE_EXPENSE: return a filtered state where the destructured state id
// isn't the action id

// case EDIT_EXPENSE: return a new state array using map and take expense as input
// (inside map) if the expense id is equal to the action id return an object with
// the expense and the action updates (spread both out)
// else return just the expense

// in the default case return the state



// filtersReducerDefaultState
// object with text, sortBy date, startDate and endDate

// filtersReducer
// case 'SET_TEXT_FILTER': return object with all the states and text is
// actions text
// case 'SORT_BY_DATE': return object with all the states and sortBy is 'date'
// case 'SORT_BY_AMOUNT': return object with all the states and sortBy is 'amount'
// case 'SET_START_DATE': return object with all the states and startDate is
// actions start date
// case 'SET_END_DATE': return object with all the states and endDate is
// actions end date
// default: return the state


// Get visible expenses
// takes expenses and these destructed elements: text, sortBy, startDate, endDate
// return the expenses array filtered:
//  intialize startDateMatch, it's assigned true if typeof startDate is not a number
//  or the createdAt value of the expense is greater or equals startDate

//  intialize endDateMatch, it's assigned true if typeof endDate is not a number
//  or the endDate value of the expense is less or equal to startDate

//  intialize textMatch, it's assigned true if typeof description is not a string
//  or the description value of the expense is included in the text (use lowercase)

//  return true if all values of startDateMatch, endDateMatch, textMatch are true

//  now sort this filtered array
//  If sortBy is set to 'date' sort by createdAt descending
//  If sortBy is set to 'amount' sort by amount descending


// Store Creation
// initialize store and assign and combine the two reducers above on an object
// with keys expense and filters


// Store subscription
// assign the state of the store to the constant state
// assign the return value of getVisibleExpenses called with expenses and
// filters of the state constant above to the constant visibleExpenses
// log visibleExpenses



// DISPATCH ACTIONS
// store dispatch in expenseOne and dispatch addExpense action with
// description Rent amount 100 and createdAt -21000

// store dispatch in expenseTwo and dispatch addExpense action with
// description Fitness amount 2000 and createdAt -1000


// dispatch removeExpense action with id expenseOne.expense.id

// dispatch editExpense action with expenseTwo.expense.id and (as object) amount 500

// dispatch removeExpense action with (as object) id expenseOne.expense.id

// dispatch editExpense action with id of expenseTwo.expense.id and amount 500

// dispatch setTextFilter action to filter string rent

// dispatch setTextFilter action to filter empty string

// dispatch sortByAmount action without argument

// dispatch sortByDate action without argument

// dispatch setStartDate action with 125

// dispatch setStartDate action without argument, this should set startDate
// to undefined

// dispatch setEndDate action with 1250
// dispatch setEndDate action with 999

// dispatch setTextFilter action to filter string Fi

const demoState = {
  expenses: [{
    id: 'asdfasdfa',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};
