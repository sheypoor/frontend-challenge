import { FC } from "react";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import Select from "components/Select/Select";
import { NEWS_LETTER_LIST } from "constants/createUserForm";
import { IContactInfoFormProps } from "pages/CreateUser/CreateUser.types";

const ContactInfoForm: FC<IContactInfoFormProps> = ({
  onSubmit,
  onGoBack,
  onChange,
  isLoading,
  userDetails,
  error,
}) => {
  const { email, newsletter } = userDetails;
  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="grid grid-cols-2 gap-6 py-10">
        <Input
          name="email"
          label="Email"
          type="email"
          value={email}
          onChange={onChange}
          error={error}
        />
        <Select
          name="newsletter"
          label="News Letter"
          type="text"
          onChange={onChange}
          value={newsletter}
          options={NEWS_LETTER_LIST}
        />
      </div>
      <div className="flex gap-6">
        <Button
          title="Go back"
          className="w-44 bg-neutral-100 text-black"
          onClick={onGoBack}
        />
        <Button
          type="submit"
          title="Submit"
          className="w-full bg-primary-700 text-white"
          isLoading={isLoading}
          disabled={!email || !newsletter || isLoading}
        />
      </div>
    </form>
  );
};

export default ContactInfoForm;
