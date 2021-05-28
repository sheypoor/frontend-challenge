type PaletteType = PaletteOptions & {
  common: {
    background: string;
  };
  primary: PaletteColorOptions;
  secondary: PaletteColorOptions;
  error: PaletteColorOptions;
  warning: PaletteColorOptions;
  accent: PaletteColorOptions;
  black: PaletteColorOptions;
};
declare interface IProjectThemeOptions extends ThemeOptions {
  background: string;
  spacing: ThemeSpacing;
  palette: PaletteType;
  typography: {
    fontFamily?: string;
    h1: Typography;
    h2: Typography;
    h3: Typography;
    h4: Typography;
    h5: Typography;
    h6: Typography;
    subtitle1: Typography;
    subtitle2: Typography;
    body1: Typography;
    body1Medium: Typography;
    body2: Typography;
    body2Medium: Typography;
    body2Bold: Typography;
    caption: Typography;
    captionBold: Typography;
    overlineMedium: Typography;
    overlineBold: Typography;
    fontWeightBold: number;
    fontWeightSemiBold: number;
    fontWeightMedium: number;
    fontWeightRegular: number;
  };
  shadows: string[];
}

declare type ThemeSpacing = number & Spacing;

declare interface Spacing {
  (): number;
  (value: number): number;
  (vertical: number, horizontal: number): [[number, number]];
  (top: number, horizontal: number, bottom: number): [[number, number, number]];
  (top: number, right: number, bottom: number, left: number): [
    [number, number, number, number]
  ];
}

declare type CreateStylesArgs = [];
declare type CreateStylesStyles<C extends string> =
  | Record<C, any>
  | ((theme: IProjectThemeOptions) => Record<C, any>);

declare type CreateStylesOptions = {
  name: string;
  index?: number;
  theming?: Theming<IProjectThemeOptions>;
};

declare interface Typography {
  fontWeight: number;
  fontSize: string;
  lineHeight?: number | string;
}

declare interface ThemeOptions {
  palette?: PaletteOptions;
}

declare interface PaletteOptions {
  primary: PaletteColorOptions;
  secondary: PaletteColorOptions;
  error?: PaletteColorOptions;
  warning?: PaletteColorOptions;
  accent?: PaletteColorOptions;
}

declare type PaletteColorOptions = SimplePaletteColorOptions & ColorPartial;

declare interface SimplePaletteColorOptions {
  light?: string;
  main: string;
  dark?: string;
  contrastText?: string;
}

declare interface ColorPartial {
  50?: string;
  75?: string;
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500?: string;
  600?: string;
  700?: string;
  800?: string;
  900?: string;
}
