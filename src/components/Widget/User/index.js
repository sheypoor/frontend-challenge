/** @format */

import { useReducer } from "react";

import classes from "./index.module.scss";

import Button from "../../UI/Buttons";
import BackButton from "../../UI/Buttons/BackButton";
import UsernameStep from "./_components/UsernameStep";
import NewsletterStep from "./_components/NewsletterStep";

import { createUser } from "../../../shared/utilities/sdk";
import {
  NEWS_LETTER_STEP,
  TANK_YOU_STEP,
  USER_NAME_STEP,
  newsletterOptions,
} from "../../../shared/constants";
import {
  emailValidation,
  numberValidation,
} from "../../../shared/utilities/regexValidation";
import TankYou from "../TankYou";

const initialSate = {
  username: "",
  age: null,
  email: "",
  newsletter: newsletterOptions[0].title,
  error: {},
  step: USER_NAME_STEP,
  isLoading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "USER_NAME":
      return {
        ...state,
        username: action.payload,
        error: { ...state.error, username: !action.payload },
      };
    case "AGE":
      return {
        ...state,
        age: action.payload,
        error: { ...state.error, age: !action.payload },
      };
    case "EMAIL":
      return {
        ...state,
        email: action.payload,
        error: { ...state.error, email: !action.payload },
      };
    case "NEWS_LETTER":
      return {
        ...state,
        newsletter: action.payload,
        error: { ...state.error, newsletter: !action.payload },
      };
    case "NEXT_STEP":
      let errorFields = {};
      if (!numberValidation(state.age))
        errorFields = { ...errorFields, age: true };
      if (!state.username) errorFields = { ...errorFields, username: true };

      return {
        ...state,
        step:
          numberValidation(state.age) && state.username
            ? NEWS_LETTER_STEP
            : state.step,
        error: { ...state.error, ...errorFields },
      };
    case "PREVIOUS_STEP":
      return {
        ...state,
        step: USER_NAME_STEP,
      };
    case "SUBMIT_STEP":
      let error = {};
      if (!state.email) error = { ...error, email: true };
      return {
        ...state,
        error: { ...state.error, ...error },
        isLoading: !!state.email,
      };
    case "TANK_YOU_STEP":
      return { ...initialSate, isLoading: false, step: TANK_YOU_STEP };
    case USER_NAME_STEP:
      return { ...state, step: USER_NAME_STEP };
    default:
      return state;
  }
};

const User = () => {
  const [
    { username, age, step, newsletter, email, error, isLoading },
    dispatch,
  ] = useReducer(reducer, initialSate);

  const validation = () => {
    if (
      username &&
      emailValidation(email) &&
      newsletter &&
      numberValidation(age)
    )
      return true;
  };

  const handleSubmit = () => {
    if (step === NEWS_LETTER_STEP) {
      dispatch({ type: "SUBMIT_STEP" });
      if (validation())
        createUser({ username, email, newsletter, age })
          .then(() => {})
          .catch((e) => {})
          .finally(() => dispatch({ type: "TANK_YOU_STEP" }));
    } else {
      dispatch({ type: "NEXT_STEP" });
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.main}>
        {step === USER_NAME_STEP ? (
          <UsernameStep
            dispatch={dispatch}
            error={error}
            username={username}
            age={age}
          />
        ) : step === NEWS_LETTER_STEP ? (
          <NewsletterStep
            dispatch={dispatch}
            email={email}
            newsletter={newsletter}
            error={error}
          />
        ) : (
          <TankYou dispatch={dispatch} />
        )}
        {step !== TANK_YOU_STEP && (
          <div className={classes.button}>
            <Button onClick={handleSubmit} isLoading={isLoading}>
              {step === NEWS_LETTER_STEP ? "ثبت کاربر" : "مرحله بعد"}
            </Button>
            {step === NEWS_LETTER_STEP && (
              <BackButton onClick={() => dispatch({ type: "PREVIOUS_STEP" })} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default User;
