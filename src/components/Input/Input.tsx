import clsx from "clsx";
import { FC } from "react";
import { IInputProps } from "./Input.types";

const Input: FC<IInputProps> = ({ label, error, className, ...props }) => {
  return (
    <div>
      <label>
        <p>{label}</p>
      </label>
      <input
        autoComplete="off"
        className={clsx(
          "w-full h-10 px-2 border border-neutral-400 rounded-md",
          className
        )}
        id={label}
        {...props}
      />
      {error && <p className="text-destructive-400">{error}</p>}
    </div>
  );
};

export default Input;
