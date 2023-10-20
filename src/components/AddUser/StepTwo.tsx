import { useFormContext } from "react-hook-form";
import { FormData } from ".";
import Select from "../Select";
import TextInput from "../TextInput";

export default function StepTwo({ hide }: { hide: boolean }) {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <section className={!hide ? "hidden" : ""}>
      <TextInput
        type="text"
        placeholder="exp: example@gmail.com"
        label="Email"
        error={errors.email}
        {...register("email")}
      />
      <Select
        options={[
          {
            key: "Daily",
            value: "daily",
          },
          {
            key: "Weekly",
            value: "weekly",
          },
          {
            key: "Monthly",
            value: "monthly",
          },
        ]}
        placeholder="newsletter"
        label="Newsletter"
        error={errors.newsletter}
        {...register("newsletter")}
      />
    </section>
  );
}
