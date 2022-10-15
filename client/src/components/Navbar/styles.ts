import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default makeStyles((theme: Theme) => ({ 
  container: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    maxWidth: "90%",
    margin: "auto", 
    paddingTop: "2rem",

  },
  title: {
    fontWeight: 700,  
    fontSize: "2rem",
    alignItems: "center", 
    margin: "0rem !important", 

    [theme.breakpoints.up('md')]: {
      display: "inline-block",  
      fontWeight: "bold",
      margin: "3rem 1.2rem 0",
    },

    [theme.breakpoints.up('lg')]: {
      marginLeft: "3rem", 
    },
  },
  grow: {
    flexGrow: 1,
  }, 
  menuItems: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  items: {
    fontWeight: "700",
    fontSize: "1rem",
    textTransform: "capitalize",
    marginRight: "0.5rem",
  },
  button: {
    textTransform: "none",
    fontWeight: "700",
    padding: ".2rem 1rem",
    margin: ".1rem 0",
    fontSize: "1rem",
    "&:hover": {
      transform: "scale(0.9)",
    },         
  },
}));