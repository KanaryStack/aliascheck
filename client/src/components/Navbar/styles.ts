import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default makeStyles((theme: Theme) => ({ 

  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.2rem",
    paddingTop: "0.1rem",
    flexGrow: 1,
  },
  title: {
    fontWeight: 700,
     fontSize: "2rem",
     justifySelf: "start",
     cursor: "pointer",
     
     [theme.breakpoints.down("md")]: {
      position: "absolute",
      top: "0",
      left: "0",
      transform: "translate(13%, 35%)",
      fontSize: "1.7rem",
   },
  },
  switcher: {
  //   [theme.breakpoints.down("md")]: {
  //  },
  },
  button: {
    padding: "0.2rem 1.4rem",
    fontWeight: 600,
    fontSize: "1rem",
    marginLeft: "2.1875rem",
    color: theme.palette.primary.contrastText,
    background: theme.palette.primary.main,
    border: 0,
    borderRadius: ".125rem",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(0.9)",
      transition: "all 0.3s ease",
    },    
  },
}));