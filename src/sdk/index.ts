import { IUser } from "pages/CreateUser/CreateUser.types";

export function createUser(user: IUser) {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve({ user, token: "test.token" });
    }, 1000);
  });
}
