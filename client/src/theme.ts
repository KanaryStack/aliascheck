import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";


declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}
declare module "@mui/material/styles" {
  interface Theme {
    appDrawer: {
      width: React.CSSProperties["width"];
      breakpoint: BreakpointOverrides;
    };
  }
  interface ThemeOptions {
    appDrawer?: {
      width?: React.CSSProperties["width"];
      breakpoint?: BreakpointOverrides;
    };
  }
}
const theme = createTheme({
  breakpoints: {
    values: {
      sm: 425,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
});
export default theme;