import { validNewsletterTypes } from "@/app/utils/sdk";
import React, { ChangeEvent } from "react";

interface Props {
  email: string;
  newsletter: validNewsletterTypes;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SecondStep = ({
  email,
  newsletter,
  onChange,
}: {
  email: string;
  newsletter: validNewsletterTypes;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}) => {
  return (
    <>
      <label className="gap-1 flex flex-col">
        Email:
        <input
          className="rounded p-2 w-full"
          type="email"
          name="email"
          placeholder="Email"
          onChange={onChange}
          value={email}
        />
      </label>
      <label className="gap-1 flex flex-col">
        Newsletter:
        <select
          className="rounded p-2 w-full"
          name="newsletter"
          id="newsletter"
          onChange={onChange}
          value={newsletter}
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
