"use client";

import { useState } from "react";
import FirstStep from "./components/FirstStep/FirstStep";
import SecondStep from "./components/SecondStep/SecondStep";
import { User, createUser } from "./utils/sdk";
export type validFieldNames = "name" | "age" | "email" | "newsletter";
export default function Home() {
  const [state, setState] = useState<User>({
    name: "",
    age: 1,
    email: "",
    newsletter: "daily",
  });

  const updateState = (fieldName: validFieldNames, value: any) => {
    setState((prevState) => ({ ...prevState, [fieldName]: value }));
  };
  console.log({ state });
  const run = async () => {
    const result = await createUser({
      name: "Sina",
      age: 24,
      email: "moraddarsina@gmail.com",
      newsletter: "monthly",
    });

    console.log(result);
  };

  const onSubmit = () => {
    console.log("submitted", state);
  };

  return (
    <main>
      sdk
      <button onClick={run}>run</button>
      <FirstStep name={state.name} age={state.age} onChange={updateState} />
      <SecondStep
        email={state.email}
        newsletter={state.newsletter}
        onChange={updateState}
      />
      <button onClick={onSubmit}>submit</button>
    </main>
  );
}
