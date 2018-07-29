import * as React from "react";

interface IProps {
  hide: boolean;
  children: React.ReactNode;
}

export const StepContainer: React.SFC<IProps> = ({ hide, children }) => (
  <div {...(hide ? { className: "hide" } : {})}>{children}</div>
);
