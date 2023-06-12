interface User {
  name: string;
  age: number;
  email: string;
  newsletter: "daily" | "weekly" | "monthly";
}

export function createUser(user: User) {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve({ user, token: "test.token" });
    }, 1000);
  });
}
