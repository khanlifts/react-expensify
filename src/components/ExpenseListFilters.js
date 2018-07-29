import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

// note: destructure props parameter from props.dispatch to {dispatch}
const ExpenseListFilters = ({dispatch, filters}) => (
  <div>
    <input type="text" value={filters.text} onChange={(e) => {
      dispatch(setTextFilter(e.target.value));
    }}/>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters)
