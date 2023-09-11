/** @format */

export const emailValidation = (email) => {
  return /\S+@\S+\.\S+/.test(email);
};

export const numberValidation = (num) => {
  return /^[0-9\b]+$/.test(num);
};
