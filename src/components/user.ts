export interface User {
    name: string;
    age: string;
    email: string;
    newsletter: string;
  }
  
  export function createUser(user: User): Promise<{ user: User, token: string }> {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve({ user, token: "test.token" });
      }, 1000);
    });
  }
  