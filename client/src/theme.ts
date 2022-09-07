import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { BreakpointOverrides } from "@material-ui/core/styles/createBreakpoints";


declare module "@material-ui/core/styles/createBreakpoints" {
  interface BreakpointOverrides {
    xs: false; 
    sm: false;
    md: false;
    lg: false;
    xl: false;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}
declare module '@material-ui/core/styles/createTheme' {
  interface Theme {
    appDrawer: {
      width: React.CSSProperties['width']
      breakpoint: BreakpointOverrides
    }
  }
  interface ThemeOptions {
    appDrawer?: {
      width?: React.CSSProperties['width']
      breakpoint?: BreakpointOverrides
    }
  }
}
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
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