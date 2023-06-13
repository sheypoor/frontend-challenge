import React, { ChangeEvent, FormEvent } from "react";

interface Props {
  name: string;
  age: number | "";
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FirstStep = ({ name, age, onChange }: Props) => (
  <>
    <label className="gap-1 flex flex-col">
      Name:
      <input
        className="rounded p-2 w-full"
        type="text"
        name="name"
        placeholder="Enter your name here"
        value={name}
        onChange={onChange}
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
        onChange={onChange}
      />
    </label>
  </>
);

export default FirstStep;
