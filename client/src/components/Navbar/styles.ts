import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default makeStyles((theme: Theme) => ({ 
  container: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    maxWidth: "90%",
    margin: "auto", 
    paddingTop: "1rem",

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
    textTransform: "capitalize",
  },  
  button: {
    padding: "0.2rem 1rem",
    fontWeight: "700",
    fontSize: "1rem",
    color: theme.palette.primary.contrastText,
    background: theme.palette.primary.main,
    border: 0,
    borderRadius: "2px",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(0.9)",
      transition: "all 0.3s ease",
    },        
  },
}));