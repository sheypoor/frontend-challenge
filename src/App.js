import React from "react";
import { Container, makeStyles, createStyles } from "@material-ui/core";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { PublicRoute } from "./services/Route";
import WP from "constants/web";

// pages
import FistStep from "./pages/signUp/FirstStep";

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      height: "100%",
      padding: "24px",
      [theme.breakpoints.down("xs")]: {
        height: "unset",
      },
    },
  })
);

const App = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.container}>
      <Router>
        <Switch>
          <PublicRoute path={WP.ROOT} component={FistStep} />
          <PublicRoute path={WP.SIGNUP_FIRST_STEP} component={FistStep} />
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
