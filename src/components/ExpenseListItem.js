import React from 'react';
import { NavLink } from 'react-router-dom';

const ExpenseListItem = ({id, description, note, amount, createdAt}) => {
  return (
    <div>
      <NavLink to={`/edit/${id}`} activeClassName="is-active">
        <h3>{description}</h3>
      </NavLink><br/>
      <p>{amount} - {createdAt}</p>
      <p>{note}</p>
    </div>
  );
}

// add Link with id to description in h3

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

export default ExpenseListItem;
