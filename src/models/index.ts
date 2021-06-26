export interface User {
  name: string;
  age: number;
  email: string;
  newsletter: 'daily' | 'weekly' | 'monthly';
}

export interface Profile {
  user: User;
  token: string;
}
