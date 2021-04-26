import React from "react";
import { Route } from "react-router-dom";
import Layout from "layout";
import WEB from "constants/web";

const LayoutHoc = (props) => {
  const { component: Component, ...rest } = props;

  if (window.location.pathname === "/") {
    props.history.push(WEB.SIGNUP_FIRST_STEP);
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
