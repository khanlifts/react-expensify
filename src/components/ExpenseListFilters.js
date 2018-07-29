import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters';

// note: destructure props parameter from props.dispatch to {dispatch}
const ExpenseListFilters = ({dispatch, filters}) => (
  <div>
    <input type="text" value={filters.text} onChange={(e) => {
      dispatch(setTextFilter(e.target.value));
    }}/>
    <select value={filters.sortBy} onChange={(e) => {
      if (e.target.value === 'date') {
        dispatch(sortByDate());
      } else {
        dispatch(sortByAmount());
      }
    }}>
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters)
