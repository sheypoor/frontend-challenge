import { ComponentProps } from "react";

export interface ISelectProps extends ComponentProps<"select"> {
  label: string;
  type: string;
  options: { id: string; title: string }[];
}
