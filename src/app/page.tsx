"use client";

import FirstStep from "./components/FirstStep/FirstStep";
import SecondStep from "./components/SecondStep/SecondStep";
import { createUser } from "./utils/sdk";

export default function Home() {
  const run = async () => {
    const result = await createUser({
      name: "Sina",
      age: 24,
      email: "moraddarsina@gmail.com",
      newsletter: "monthly",
    });

    console.log(result);
  };
  return (
    <main>
      sdk
      <button onClick={run}>run</button>
      <FirstStep />
      <SecondStep />
    </main>
  );
}
