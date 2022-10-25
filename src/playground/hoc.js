import React from 'react';
import ReactDOM from 'react-dom/client';
console.log("hoc");

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin &&
        <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  )
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>{props.isAuthenticated ?
      <WrappedComponent {...props} />
      : <p>Please login to view the info.</p>}
    </div>
  )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthInfo
      isAuthenticated={false}
      info='These are the details.'
    />
  </React.StrictMode>
);