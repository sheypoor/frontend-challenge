import React, { FC, memo } from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import RegisterStepOne from "./RegisterStepOne";
import RegisterStepTwo from "./RegisterStepTwo";

const RegisterRoutes: FC = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact={true} path={`${path}`}>
        <RegisterStepOne />
      </Route>

      <Route path={`${path}/step-two`}>
        <RegisterStepTwo />
      </Route>

      <Redirect to="/" />
    </Switch>
  );
};
export default memo(RegisterRoutes);
