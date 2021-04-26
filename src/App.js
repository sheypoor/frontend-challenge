import React from "react";
import { Container, makeStyles, createStyles } from "@material-ui/core";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { PublicRoute } from "./services/Route";
import WEB from "constants/web";

// pages
import SignupFirstStep from "pages/signup/FirstStep";
import SignupSecondStep from "pages/signup/SecondStep";

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
          <PublicRoute
            exact
            path={WEB.SIGNUP_FIRST_STEP}
            component={SignupFirstStep}
          />
          <PublicRoute
            exact
            path={WEB.SIGNUP_SECOND_STEP}
            component={SignupSecondStep}
          />
          <PublicRoute exact path={WEB.ROOT} component={SignupFirstStep} />
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
