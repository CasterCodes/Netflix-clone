import React from "react";

import { Route, Redirect } from "react-router-dom";

export const IsUserLoggedIn = ({ user, loggedInPath, children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        // no user
        if (!user) {
          return children;
        }
        // there is a user
        if (user) {
          return <Redirect to={{ pathname: loggedInPath }} />;
        }
        return null;
      }}
    />
  );
};

export const ProtectedRoute = ({ user, children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children;
        }

        if (!user) {
          return (
            <Redirect
              to={{
                pathname: "signin",
                state: { from: location },
              }}
            />
          );
        }

        return null;
      }}
    />
  );
};
