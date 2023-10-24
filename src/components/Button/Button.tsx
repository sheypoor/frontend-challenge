import clsx from "clsx";
import { FC } from "react";
import { IButtonProps } from "./Button.types";

const Button: FC<IButtonProps> = ({
  title,
  isLoading = false,
  className,
  disabled = false,
  ...restProps
}) => {
  console.log("disabled", disabled);
  return (
    <button
      className={clsx("h-14 rounded-xl", className, {
        "!bg-primary-300": disabled,
      })}
      disabled={disabled}
      {...restProps}
    >
      {isLoading ? "Loading..." : title}
    </button>
  );
};

export default Button;
