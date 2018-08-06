import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => (
  <div>
    404 - <NavLink to="/">Go home</NavLink>
  </div>
);

export default ErrorPage;
