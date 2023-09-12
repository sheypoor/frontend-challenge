/** @format */

export const emailValidation = (email) => {
  const emailRegExp = new RegExp(
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
  );
  return emailRegExp.test(email);
};

export const numberValidation = (number) => {
  const farsiNumberRegExp = new RegExp(/^[۰-۹]+$/);
  const numberRegExp = new RegExp(/^\d+$/);
  return numberRegExp.test(number) || farsiNumberRegExp.test(number);
};
