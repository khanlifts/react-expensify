import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

const ExpensesSummary = (props) => {
  const amountOfDifferentExpenses = props.expenses.length;
  const expenseWord = props.expenses === 1 ? 'expense' : 'expenses';
  const expensesTotal = numeral(getExpensesTotal(props.expenses)).format('$0,0.00');
  return (
    <div>
      <p>
        Viewing {amountOfDifferentExpenses} {expenseWord} totalling {expensesTotal}
      </p>
    </div>
  );
};

// filter value of expenses through selectExpenses function
const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenses: visibleExpenses
  };
}

// connect component ExpenseList to redux store
export default connect(mapStateToProps)(ExpensesSummary);
