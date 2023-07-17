import FormField from "../../UIComponents/FormField";

export default ({ formData, errors, handleChange }) => (
  <>
    <h2 className="text-2xl font-bold mb-4">Step 1</h2>
    <FormField
      name="name"
      label="Name"
      value={formData.name}
      onChange={handleChange}
      error={errors.name}
    />
    <FormField
      name="age"
      label="Age"
      value={formData.age}
      onChange={handleChange}
      error={errors.age}
      type="number"
    />
  </>
);
