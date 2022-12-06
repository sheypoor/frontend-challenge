declare module "sdk" {
  export function createUser(
    user: User
  ): Promise<{ user: User; token: string }>;
  export interface User {
    name: string;
    age: number;
    email: string;
    newsletter: "daily" | "weekly" | "monthly";
  }
}
