import { validFieldNames } from "@/app/page";
import React from "react";

const FirstStep = ({
  name,
  age,
  onChange,
}: {
  name: string;
  age: number;
  onChange: (fieldName: validFieldNames, value: any) => void;
}) => {
  const handleChange = (e: any) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <>
      <label className="gap-1 flex flex-col">
        Name:
        <input
          className="rounded p-2 w-full"
          type="text"
          name="name"
          placeholder="Enter your name here"
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className="gap-1 flex flex-col">
        Age:
        <input
          className="rounded p-2 w-full"
          type="text"
          name="age"
          placeholder="Enter your age here"
          min={1}
          max={100}
          step={1}
          value={age}
          onChange={handleChange}
        />
      </label>
    </>
  );
};

export default FirstStep;
