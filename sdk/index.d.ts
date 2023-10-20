export interface User {
  name: string;
  age: number;
  email: string;
  newsletter: "daily" | "weekly" | "monthly";
}

export interface UserResponse {
  user: User;
  token: string;
}

export function createUser(user: User): Promise<UserResponse>;
