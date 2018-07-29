import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>You are logged in as admin...</p>}
      <WrappedComponent {...props}/> {/* pass down all the props as key value pairs*/}
    </div>
  );
}

// Show component if authenticated,
// else show info: please log in to see the info
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {
        props.isAuthenticated ?
        <WrappedComponent {...props} /> :
        <p>Please log in to see the info</p>
      }
    </div>
  );
}

const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="This is a secret message" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="This is a secret message" />, document.getElementById('app'));
