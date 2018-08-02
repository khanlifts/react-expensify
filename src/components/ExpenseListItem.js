import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({id, description, note, amount, createdAt}) => {
  return (
    <div>
      <NavLink to={`/edit/${id}`} activeClassName="is-active">
        <h3>{description}</h3>
      </NavLink><br/>
      <p>
        {numeral(amount / 100).format('$0,0.00')} - {moment(createdAt).locale('de').format('lll')}
      </p>
      <p>{note}</p>
    </div>
  );
}

export default ExpenseListItem;
