import FormField from "../../UIComponents/FormField";

export default ({ formData, errors, handleChange }) => {
  const newsletterOptions = [
    { label: "Daily", value: "daily" },
    { label: "Weekly", value: "weekly" },
    { label: "Monthly", value: "monthly" },
  ];

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Step 2</h2>
      <FormField
        name="email"
        label="Email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        type="email"
      />
      <FormField
        name="newsletter"
        label="Newsletter"
        value={formData.newsletter}
        onChange={handleChange}
        error={errors.newsletter}
        options={newsletterOptions}
        as="select"
      />
    </>
  );
};
