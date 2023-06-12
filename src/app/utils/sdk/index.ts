export type validNewsletterTypes = "daily" | "weekly" | "monthly";

export interface User {
  name: string;
  age: number;
  email: string;
  newsletter: validNewsletterTypes;
}

export interface UserResultShape {
  token: string;
  user: User;
}

export function createUser(user: User) {
  return new Promise<UserResultShape>((resolve) => {
    setTimeout(function () {
      resolve({ user, token: "test.token" });
    }, 1000);
  });
}

export const isEmailValid = (email: string): boolean => {
  return !!String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
