import {
  ERRORS_DEFAULT_VALUE,
  USER_DEFAULT_VALUE,
} from "constants/createUserForm";
import { ChangeEvent, useState } from "react";
import { createUser } from "sdk";
import { isValidEmail } from "utils/validations";
import { IUser } from "../pages/CreateUser/CreateUser.types";

export const useCreateUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userDetails, setUserDetails] = useState<IUser>(USER_DEFAULT_VALUE);
  const [errors, setErrors] = useState<IUser>(ERRORS_DEFAULT_VALUE);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [name]: value,
    }));
    setErrors({ ...errors, [name]: "" });
  };

  const submitUser = async () => {
    if (isValidEmail(userDetails.email))
      try {
        setIsLoading(true);
        await createUser(userDetails);
        setIsSuccess(true);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    else {
      setErrors({ ...errors, email: "Please enter a valid email address" });
    }
  };

  return {
    submitUser,
    handleInputChange,
    userDetails,
    isLoading,
    isSuccess,
    errors,
  };
};
