import { FC } from "react";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { IUserInfoProps } from "pages/CreateUser/CreateUser.types";

const UserInfoForm: FC<IUserInfoProps> = ({
  onSubmit,
  userDetails,
  onChange,
}) => {
  const { age, name } = userDetails;
  return (
    <form onSubmit={onSubmit}>
      <div className="grid grid-cols-2 gap-6 py-10">
        <Input
          name="name"
          label="Full name"
          type="text"
          value={name}
          onChange={onChange}
        />
        <Input
          name="age"
          label="Age"
          type="number"
          min={1}
          max={100}
          value={age}
          onChange={onChange}
        />
      </div>
      <Button
        title="Next"
        className="w-full bg-primary-700 text-white"
        type="submit"
        disabled={!age || !name}
      />
    </form>
  );
};

export default UserInfoForm;
