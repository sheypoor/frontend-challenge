/** @format */

import { newsletterOptions } from "../../../../shared/constants";
import classes from "./index.module.scss";

const Select = ({ newsletter, onChange }) => {
  return (
    <select
      dir='rtl'
      className={classes.select}
      onChange={onChange}
      value={newsletter}>
      {newsletterOptions.map((option) => (
        <option key={option.id} value={option.id}>
          {option.title}
        </option>
      ))}
    </select>
  );
};

export default Select;
