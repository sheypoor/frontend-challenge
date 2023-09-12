/** @format */

import classes from "./index.module.scss";

const TextInput = ({ placeholder, value, name, onChange, type, error }) => {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      type={type}
      className={`${classes.input} ${error?.[name] ? classes.error : ""}`}
      error={error}
    />
  );
};

export default TextInput;
