import { useFormContext } from "react-hook-form";
import { FormData } from ".";
import TextInput from "../TextInput";

export default function StepOne({ hide }: { hide: boolean }) {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <section className={!hide ? "hidden" : ""}>
      <TextInput
        type="text"
        placeholder="Name"
        label="Name"
        error={errors.name}
        {...register("name")}
      />
      <TextInput
        type="number"
        placeholder="Age"
        label="Age"
        error={errors.age}
        {...register("age")}
      />
    </section>
  );
}
