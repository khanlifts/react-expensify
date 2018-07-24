// import createStore combineReducers from redux and uuid from uuid

// ADD_EXPENSE ACTION
// Destructure input object with description, note, amount, createdAt and
// set default empty object.
// Return object with type 'ADD_EXPENSE' and expense object with the attributes
// above plus id from uuid.


// REMOVE_EXPENSE ACTION
// Destructure id and set empty object as default
// Return object with type of REMOVE_EXPENSE and id set to id

// EDIT_EXPENSE ACTION
// return object with type, id, updates
// no destructuring or default empty object

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

// case ADD_EXPENSE: return an array of the states and the expense passed from
// addExpense action

// case REMOVE_EXPENSE: return a filtered state where the destructured state id
// isn't the action id

// case EDIT_EXPENSE: return a new state array using map and takes expense as input
// (inside map) if the expense id is equal to the action id return an object with the expenses
// and the action updates (spread both out)
// else return just the expense

// in the default case return the state



// Filters Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action ) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SORT_BY_AMOUNT':
     return {
       ...state,
       sortBy: 'amount'
     };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
    default:
      return state;
  }
};

// Get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.endDate <= endDate;
    const textMatch =
      typeof text !== 'string' ||
      expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
}

// Store Creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

// DISPATCH ACTIONS
const expenseOne = store.dispatch(addExpense(
  { description: 'Rent', amount: 100, createdAt: -21000,  }
));
const expenseTwo = store.dispatch(addExpense(
  { description: 'Fitness', amount: 2000, createdAt: -1000 }
));
//
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense( expenseTwo.expense.id, { amount: 500 }));
//
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
//
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate()); // should set startDate to undefined
//
// store.dispatch(setEndDate(1250));
// store.dispatch(setEndDate(999));

// store.dispatch(setTextFilter('Fi'));

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
