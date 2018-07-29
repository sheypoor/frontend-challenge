import * as React from "react";

interface IProps {
  name?: string;
  type: string;
  error?: boolean | string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
}

export const Input: React.SFC<IProps> = ({ name, error, ...rest }) => (
  <div className="input-wrapper">
    <label htmlFor={name}>{name}</label>
    <input name={name} {...rest} />
    {error && <div className="error">{error}</div>}
  </div>
);
