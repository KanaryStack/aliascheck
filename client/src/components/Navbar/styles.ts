import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default makeStyles((theme: Theme) => ({ 
  container: {
    display: "flex",
    alignItems: "center",
    width: "100%",   
    maxWidth: "1200px",
    margin: "auto",
  },
  title: {
    fontWeight: 700,
    fontSize: "2.5rem", 
    color: "#031521",
    flexGrow: 1, 
    alignItems: "center",
    display: "flex",
    margin: "0rem !important",

    [theme.breakpoints.up('md')]: {
      display: "inline-block",
      color: "#000", 
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
}));