import * as React from "react";

interface IProps {
  label: string;
  onClick?: () => void;
  type?: string;
  className: string;
  disabled?: boolean;
}

export const Button: React.SFC<IProps> = ({
  label,
  type = "button",
  ...rest
}) => (
  <button type={type} {...rest}>
    {label}
  </button>
);
