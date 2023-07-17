export default ({
  name,
  label,
  value,
  onChange,
  error,
  type = "text",
  as = "input",
  options = [],
}) => (
  <div className="mb-4">
    <label htmlFor={name} className="block mb-2 font-bold">
      {label}
    </label>
    {as === "input" && (
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={label}
        className={`form-input w-full p-2 rounded-md ${
          error ? "border-red-500" : ""
        }`}
      />
    )}
    {as === "select" && (
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`form-input w-full p-2 rounded-md ${
          error ? "border-red-500" : ""
        }`}
      >
        <option>Please select a newsletter option.</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    )}
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);
