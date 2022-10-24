import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";


export default makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    width: "100%",

    [theme.breakpoints.up("xs")]: {
        padding: "1.8rem 1.5rem",
      },
    
    [theme.breakpoints.up("sm")]: {
        padding: "2rem",
      },

    [theme.breakpoints.up("md")]: {
      "& > span": {
        marginRight: "5%",
      },
    },

    [theme.breakpoints.up("lg")]: {
      gap: "1rem",
      "& > span": {
        alignSelf: "auto",
        margin: "0",
      },
    },
  },
  span: {
    
      display: "inline-block",
      marginTop: "1rem", 
      marginLeft: "0.2rem", 
      fontSize: "0.8rem",
      textDecoration: "underline",
      cursor: "pointer", 
   

    "&:hover": {
      color: theme.palette.primary.main,
    },
    "&:active": {
      color: theme.palette.primary.main,
    },
  },

}));