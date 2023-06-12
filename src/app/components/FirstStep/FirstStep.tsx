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
    <div>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        min={1}
        max={100}
        value={age}
        onChange={handleChange}
      />
    </div>
  );
};

export default FirstStep;
