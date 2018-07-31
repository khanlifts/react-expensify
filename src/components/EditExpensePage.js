import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          console.log('updated: ', expense);
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push('/');
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeExpense({ id: props.expense.id }));
          props.history.push('/');
        }}
      >
      Remove</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
  }
}

export default connect(mapStateToProps)(EditExpensePage);

// 1. connect component EditExpensePage to redux store
// 2. mapStateToProps takes state and props
//      return object, with expense as key and value state expenses array
//      find and return all items in this array that match the expense id
//      and the props match params id

// 1. import ExpenseForm
// 2. render ExpenseForm
// 3. add onSubmit handler to log the expense passed to it
