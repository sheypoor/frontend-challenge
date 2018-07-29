export const nameError = "Please enter a-z and space";
export const emailError = "Please enter validate email Address";
export const ageError = "Please enter age between 1 and 999";

export const name = (value: string) => {
  const reg = /^[a-zA-Z ]{1,30}$/;
  return !reg.test(value) && nameError;
};

export const email = (value: string) => {
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return !reg.test(String(value).toLowerCase()) && emailError;
};

export const age = (value: string) => {
  const reg = /^[1-9][0-9]{0,2}$/gi;
  return !reg.test(value) && ageError;
};
