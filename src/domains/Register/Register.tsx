import React, { FC } from "react";

import RegisterRoutes from "./RegisterRoutes";
import useStyle from "./Register.style";

const Register: FC = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <RegisterRoutes></RegisterRoutes>
    </div>
  );
};

export default Register;
