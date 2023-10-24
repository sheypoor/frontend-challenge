import { IUser, StpesEnum } from "pages/CreateUser/CreateUser.types";

export const STEPS_USER_FORM = [
  { id: StpesEnum.USER_INFO, step: 1, title: "User info" },
  { id: StpesEnum.CONTACT_INFO, step: 2, title: "contact info" },
];

export const USER_DEFAULT_VALUE = {} as IUser;

export const ERRORS_DEFAULT_VALUE = {} as IUser;

export const NEWS_LETTER_LIST = [
  { id: "1", title: "daily" },
  { id: "2", title: "weekly" },
  { id: "3", title: "monthly" },
];
