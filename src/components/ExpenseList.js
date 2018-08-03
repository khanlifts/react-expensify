import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {<p>Your total of expenses is ${getExpensesTotal(props.expenses)}</p>}
    {
      props.expenses.map((expense, index) => (
        <ExpenseListItem
          key={expense.id}
          {...expense}
        />
      ))
    }
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
