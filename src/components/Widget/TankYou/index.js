/** @format */

import { USER_NAME_STEP } from "../../../shared/constants";
import Button from "../../UI/Buttons";
import classes from "./index.module.scss";

const TankYou = ({ dispatch }) => {
  return (
    <div className={classes.container}>
      <h3>کاربر با موفقیت ثبت شد</h3>
      <Button onClick={() => dispatch({ type: USER_NAME_STEP })}>
        افزودن کاربر جدید
      </Button>
    </div>
  );
};

export default TankYou;
