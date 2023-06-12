import { validFieldNames } from "@/app/page";
import { validNewsletterTypes } from "@/app/utils/sdk";
import React from "react";

const SecondStep = ({
  email,
  newsletter,
  onChange,
}: {
  email: string;
  newsletter: validNewsletterTypes;
  onChange: (fieldName: validFieldNames, value: any) => void;
}) => {
  const handleChange = (e: any) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <>
      <label className="gap-1 flex flex-col">
        Email:
        <input
          className="rounded p-2 w-full"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
      </label>
      <label className="gap-1 flex flex-col">
        Newsletter:
        <select
          className="rounded p-2 w-full"
          name="newsletter"
          id="newsletter"
          onChange={handleChange}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </label>
    </>
  );
};

export default SecondStep;
