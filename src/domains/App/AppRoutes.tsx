import React, { FC, memo } from "react";
import { Route, Switch } from "react-router-dom";

import Register from "domains/Register";

const AppRoutes: FC = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Register />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="*">
        <h1>پیدا نشد!</h1>
      </Route>
    </Switch>
  );
};

export default memo(AppRoutes);
