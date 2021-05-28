import { useTheme as useJSSTheme } from "react-jss";
import type { IProjectTheme } from "./theme";

export const useTheme = () => useJSSTheme() as IProjectTheme;
