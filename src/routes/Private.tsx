import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../infrastructure/auth/login";

export const PrivateRoutes: React.FunctionComponent<{ path: string }> = ({
  children,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
