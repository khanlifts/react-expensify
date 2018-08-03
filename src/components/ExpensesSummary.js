import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

const ExpensesSummary = (props) => (
  <div>
    {
      <p>
        Viewing {props.expenses.length} {props.expenses.length === 1 ?
          <span>expense</span> :
          <span>expenses</span>} totalling ${getExpensesTotal(props.expenses)}
      </p>
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
export default connect(mapStateToProps)(ExpensesSummary);
