export function createUser(user) {
  console.log("hi");
    return new Promise(resolve => {
      setTimeout(function() {
        resolve({ user, token: "test.token" });
      }, 1000);
    });
  }