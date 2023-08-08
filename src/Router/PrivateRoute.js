/** @format */

import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const resetPassword = localStorage.getItem("resetPassword");


  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn === "true" ? (
          resetPassword === "true" ? (
            <Redirect
              to={{
                pathname: "/ResetPassword",
                state: { from: props.location },
              }}
            />
          ) : (
            <Component {...props} />
          )
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};


export default PrivateRoute;
