/** @format */

import classes from "./index.module.scss";
import { CircularProgressOnButton } from "../CircularProgressOnButton";
const Button = ({ onClick, children, isLoading }) => {
  return (
    <button
      onClick={onClick}
      className={`${classes.button} ${
        isLoading ? classes.disabled : classes.active
      }`}>
      {isLoading && <CircularProgressOnButton />}
      {children}
    </button>
  );
};

export default Button;
