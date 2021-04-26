import React from "react";
import { createStyles, Grid, makeStyles } from "@material-ui/core";

// styles
const useStyles = makeStyles((theme) =>
  createStyles({
    layout: {
      borderRadius: "23px",
      position: "relative",
      height: "100%",
      boxShadow:
        "0 1px 5px 0 rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%)",
      [theme.breakpoints.down("xs")]: {
        height: "unset",
      },
    },
    leftSide: {
      borderTopRightRadius: "23px",
      borderBottomRightRadius: "23px",
      padding: theme.spacing(3),
      backgroundColor: "#fffbeb",
      [theme.breakpoints.down("xs")]: {
        marginTop: "90px",
        borderRadius: "0 0 23px 23px",
      },
    },
    rightSide: {
      padding: "24px 24px 0 100px ",
      marginTop: theme.spacing(8),
      [theme.breakpoints.down("xs")]: {
        padding: "24px",
        marginTop: theme.spacing(10),
      },
    },
  })
);

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.layout}>
      <Grid item xs={12} sm={11} md={8} className={classes.rightSide}>
        {children}
      </Grid>
      <Grid item xs={12} sm={1} md={4} className={classes.leftSide} />
    </Grid>
  );
};

export default Layout;
