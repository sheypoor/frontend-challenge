import React from "react";
import { Route } from "react-router-dom";
import Layout from "layout";
import WP from "constants/web";

const LayoutHoc = (props) => {
  const { component: Component, history, ...rest } = props;

  if (window.location.pathname === "/") {
    history.push(WP.SIGNUP_FIRST_STEP);
  }

  return (
    <Layout>
      <Component {...rest} />
    </Layout>
  );
};

const PublicRoute = ({ component: Component, type, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <LayoutHoc {...matchProps} component={Component} />
      )}
    />
  );
};

export { PublicRoute };
