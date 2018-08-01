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

export default ExpenseListItem;
