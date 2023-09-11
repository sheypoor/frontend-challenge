/** @format */

import classes from "./index.module.scss";

const BackButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className={classes.button}>
      مرحله قبل
    </button>
  );
};

export default BackButton;
