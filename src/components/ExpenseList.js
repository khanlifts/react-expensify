import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {
      props.expenses.map((expense, index) => (
        <ExpenseListItem
          key={expense.id}
          {...expense}
        />
      ))
    }
    {props.expenses.length}
  </div>
);

// filter value of expenses through selectExpenses function
const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
}

// connect component ExpenseList to redux store
export default connect(mapStateToProps)(ExpenseList);
