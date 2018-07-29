import * as React from "react";

interface IProps {
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<EventTarget>) => void;
  title: string;
  submittedSuccessfully: boolean;
}

export const Form: React.SFC<IProps> = ({
  children,
  onSubmit,
  title,
  submittedSuccessfully
}) => (
  <div>
    <h1 {...(submittedSuccessfully ? { className: "green-color" } : {})}>
      {title}
      {submittedSuccessfully && " Successfully Submitted"}
    </h1>
    <form onSubmit={onSubmit}>{children}</form>
  </div>
);
