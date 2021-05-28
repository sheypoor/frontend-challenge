import { createSpacing } from "./theme.helpers";
import typography from "./theme.typography";
export type IProjectTheme = typeof ProjectTheme;

const ProjectTheme: IProjectThemeOptions = {
  typography,
  background: "white",
  spacing: createSpacing(8),
  palette: {
    common: {
      background: "white",
    },
    primary: {
      main: "#04b946",
      900: "#005d1a",
      700: "#007c2d",
      300: "#4ecc68",
      100: "#a5ebb2",
      75: "#c9f3d1",
      50: "#eefff2",
    },
    secondary: {
      main: "#0c67f0",
      900: "#0f3a6d",
      700: "#0050ac",
      300: "#008efa",
      100: "#bbe0ff",
      75: "#d6ecff",
      50: "#e3f3fe",
    },
    error: {
      main: "#dd0a0a",
      900: "#650505",
      700: "#a10808",
      300: "#e33636",
      100: "#f99898",
      75: "#fcd3d3",
      50: "#ffeaec",
    },
    warning: {
      main: "#ffb60a",
      900: "#8c6406",
      700: "#d19509",
      300: "#ffc336",
      100: "#ffe4a5",
      75: "#ffefc9",
      50: "#fff9e6",
    },
    accent: {
      main: "#fff9c4",
      900: "#a39f7d",
      700: "#e8e3b3",
      300: "#fffad4",
      100: "#fffce9",
    },
    black: {
      main: "#404040",
      900: "#1f1f1f",
      500: "#6a6a6a",
      300: "#9c9c9c",
      100: "#dedede",
      75: "#f9f9f9",
    },
  },
  shadows: [
    "0 2px 6px rgba(64,64,64,0.16)",
    "0 2px 6px 0 rgba(68, 68, 68, 0.16)",
    "0 6px 14px 0 rgba(64, 64, 64, 0.18)",
  ],
};

export default ProjectTheme;
