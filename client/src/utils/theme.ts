import { red } from "@mui/material/colors";
import { PaletteOptions, createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
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
export const theme = createTheme({
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 368,
      sm: 425,
      md: 601,
      lg: 769,
      xl: 1024,
    },
  },
  palette: {
    primary: {
      main: "#FAB535",
      contrastText: "#000",
    },
    secondary: {
      light: "rgba(0,0,0,0.5)",
      main: "rgb(0,0,0)",
    },
    error: {
      main: red.A400,
    },
  },
});
export const lightTheme = createTheme({
  palette: {
    primary: {main: "#FAB535",},
    secondary: { main: "#09334F",}, 
    mode: "light",
  },
});
export const darkTheme = createTheme({
   palette: {
    primary: {main: "#FAB535",},
    secondary: {   main: "#09334F",},
    mode: "dark"
  },
});
