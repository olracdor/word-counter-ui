import React from "react";
import { Route, Redirect } from "react-router-dom";
import AuthService from '../services/AuthService';

export default function SecuredRoute ({ component: Component, ...rest }: any) {
  return (
    <Route
      {...rest}
      render={props =>
        new AuthService().isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};
