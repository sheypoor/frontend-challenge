import clsx from "clsx";
import { FC } from "react";
import { ISelectProps } from "./Select.types";

const Select: FC<ISelectProps> = ({ label, className, options, ...props }) => {
  return (
    <div>
      <label>
        <p>{label}</p>
      </label>
      <select
        autoComplete="off"
        className={clsx(
          "w-full h-10 px-2 border border-neutral-400 rounded-md",
          className
        )}
        id={label}
        {...props}
      >
        <option value={""}>select</option>
        {options.map((option) => {
          return (
            <option key={option.id} value={option.title}>
              {option.title}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
