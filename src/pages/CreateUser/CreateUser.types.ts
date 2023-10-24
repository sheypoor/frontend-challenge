import { ChangeEvent, FormEvent } from "react";

export const enum StpesEnum {
  USER_INFO = "user info",
  CONTACT_INFO = "contact info",
}

export interface IUser {
  name: string;
  age: string;
  email: string;
  newsletter: string;
}

export interface IUserInfoProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  userDetails: IUser;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export interface IContactInfoFormProps extends IUserInfoProps {
  onGoBack: () => void;
  isLoading: boolean;
  error: string;
}
