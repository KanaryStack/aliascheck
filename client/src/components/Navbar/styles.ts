import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default makeStyles((theme: Theme) => ({ 
  container: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    maxWidth: "1300px",
    margin: "auto",
    paddingTop: "1rem",
  },
  title: {
    fontWeight: 700,  
    fontSize: "2.5rem",
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
  menuItems: {},
  button: {
    "&:hover": {
      transform: "scale(0.9)",
    },         
  },
}));