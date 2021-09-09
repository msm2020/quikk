import React from "react";
import { Route, Redirect } from "react-router-dom";
import { USER_TOKEN_KEY } from "../constants";

/**
 * Component to make route private so that
 * only the authorized users can access them.
 *
 * @see {@link https://stackoverflow.com/a/43171515/7469926 Stackoverflow}
 */
export default function PrivateRoute({
  component: Component,
  redirectPath = "/auth",
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem(USER_TOKEN_KEY) ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/auth",
              state: { from: props.location },
              search: `?continue=${props.location.pathname}`,
            }}
          />
        )
      }
    />
  );
}
