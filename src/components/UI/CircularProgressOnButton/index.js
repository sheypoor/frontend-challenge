/** @format */

import React from "react";
import classes from "./index.module.scss";
import { CircularProgress } from "@material-ui/core";

export const CircularProgressOnButton = () => {
  return <CircularProgress size={20} className={classes.progressBar} />;
};
