import * as React from "react";

interface IProps {
  options: string[];
  name: string;
  value: "daily" | "weekly" | "monthly";
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select: React.SFC<IProps> = ({ options, name }) => (
  <div className="input-wrapper">
    <label htmlFor={name}>{name}</label>
    <select name={name}>
      {options &&
        options.map(value => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
    </select>
  </div>
);
