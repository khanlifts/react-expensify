import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    {/*
      set activeClassName for styling of active link
      set exact={true} to avoid class being appended to home on every page
    */}
    <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink><br/>
    <NavLink to="/create" activeClassName="is-active">Create Page</NavLink><br/>
    <NavLink to="/help" activeClassName="is-active">Help Page</NavLink>
  </header>
);

export default Header;
