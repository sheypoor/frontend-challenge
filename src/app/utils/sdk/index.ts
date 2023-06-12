export type validNewsletterTypes = "daily" | "weekly" | "monthly";

export interface User {
  name: string;
  age: number;
  email: string;
  newsletter: validNewsletterTypes;
}

export function createUser(user: User) {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve({ user, token: "test.token" });
    }, 1000);
  });
}
