import { ComponentProps } from "react";

export interface IButtonProps extends ComponentProps<"button"> {
  title: string;
  isLoading?: boolean;
}
