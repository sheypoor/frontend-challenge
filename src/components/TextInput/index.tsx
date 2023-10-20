import { ComponentProps, forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface TextInputProps extends Omit<ComponentProps<"input">, "className"> {
  label: string;
  error?: FieldError;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  function TextInput({ label, error, ...etc }, ref) {
    return (
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
        <input
          {...etc}
          ref={ref}
          className={`input input-bordered w-full${
            error?.message ? " input-error" : ""
          }`}
        />
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
  }
);

export default TextInput;
