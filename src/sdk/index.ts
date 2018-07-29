interface User {
  name: string;
  age: number;
  email: string;
  newsletter: "daily" | "weekly" | "monthly";
}

interface ITokenResponse {
  user: User;
  token: string;
}

export const createUser = (user: User): Promise<ITokenResponse> =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({ user, token: "test.token" });
    }, 1000);
  });
