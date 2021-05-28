import { createUseStyles } from "react-jss";
import { htmlFontSize } from "./theme.constants";

export const createStyles = <ClassNames extends string = string>(
  styles:
    | Record<ClassNames, any>
    | ((theme: IProjectThemeOptions) => Record<ClassNames, any>),
  options: CreateStylesOptions
) => createUseStyles(styles, options);

export const pxToRem = (px: number, baseFontSize: number = htmlFontSize) =>
  `${Math.round((px * 1000) / baseFontSize) / 1000}rem`;

export const createSpacing = (spacing: number) => {
  _spacingFn.valueOf = () => spacing;
  return _spacingFn as ThemeSpacing;
};

const _spacingFn = ((...args: number[]) => {
  const spacing = +_spacingFn;
  if (!args.length) return spacing;
  const spacings = args.map((_) => _ * spacing);
  return args.length === 1 ? spacings[0] : [spacings];
}) as Spacing;
