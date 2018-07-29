import * as React from "react";

interface IProps {
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<EventTarget>) => void;
  title: string;
  submittedSuccessfully?: boolean;
}

export const Form: React.SFC<IProps> = ({
  children,
  onSubmit,
  title,
  submittedSuccessfully
}) => {
  const error = submittedSuccessfully === false;
  const success = submittedSuccessfully === true;
  const SuccessOrError = error || success;
  const className = SuccessOrError && (error ? "red-color" : "green-color");
  const message =
    SuccessOrError && (success ? " Successfully Submitted" : "Failed");
  return (
    <div>
      <h1 {...className && { className }}>
        {title}
        {message}
      </h1>
      <form onSubmit={onSubmit}>{children}</form>
    </div>
  );
};
