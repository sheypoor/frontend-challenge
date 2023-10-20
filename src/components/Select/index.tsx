import { ComponentProps, forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface Option {
  key: string;
  value: string;
}

interface SelectProps
  extends Omit<ComponentProps<"select">, "className" | "label"> {
  label: string;
  options: Option[];
  error?: FieldError;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { label, options, error, ...etc },
  ref
) {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <select {...etc} ref={ref} className="select select-bordered w-full">
        {options.map((item) => (
          <option value={item.value} key={item.value}>
            {item.key}
          </option>
        ))}
      </select>
      {!!error?.message && (
        <label className="label">
          <span
            className={`label-text-alt${error.message ? " text-error" : ""}`}
          >
            {error.message}
          </span>
        </label>
      )}
    </div>
  );
});

export default Select;
