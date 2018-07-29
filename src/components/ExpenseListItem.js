import React from 'react';
import { removeExpense } from '../actions/expenses';
import { connect } from 'react-redux';

const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => {
  return (
    <div>
      <h3>{description}</h3>
      <p>{amount} - {createdAt}</p>
      <button
        onClick={() => {
          dispatch(removeExpense({id}))
        }}
      >
      Remove</button>
    </div>
  );
}

{/* ExpenseListItem without destructuring parameters

const ExpenseListItem = (props) => {
  const id = props.id;
  return (
    <div>
      <h3>{props.description}</h3>
      <p>{props.amount} - {props.createdAt}</p>
      <button
        onClick={() => {
          props.dispatch(removeExpense({id}))
        }}
      >
      Remove</button>
    </div>
  );
}
*/}

export default connect()(ExpenseListItem);
