
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export default makeStyles((theme: Theme) => ({
  root: {
    marginTop: "3.75rem",
    flexGrow: 1,
    backgroundColor: "#FAB535",
    color: "#09334F",
    fontFamily: "Poppins",
  },
  footer: {
    display: "flex",
    justifyContent: "space-around",
    px: 3,
    [theme.breakpoints.down("md")]: {
      display: "grid",
      
    },
    [theme.breakpoints.up("xs")]: {
      margin: "0 1.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gridgap: "1rem",
      maxWidth: "100%",
      fontSize: "16px",
      lineHeight: 1.5,
      padding: "15px",
      margin: "0 1rem",
    },
  },
  first: {
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    width: "20%",
  },
  },
  second: {
    fontSize: "1.2rem",
     textAlign: "center",
     [theme.breakpoints.up("md")]: {
      width: "35%",
    },
     [theme.breakpoints.down("md")]: {
      border: ".005px solid gray",
      borderWidth: ".002px",
    },

  },
  subscribeHeader: {
    [theme.breakpoints.down("md")]: {
      fontSize: "1.2rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  third: {
  fontSize: "1.2rem",
  textAlign: "left",
  [theme.breakpoints.up("md")]: {
    width: "10%",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
    textAlign: "center",
  },
  },
  fourth: {
   fontSize: "1.2rem",
   textAlign: "left",
   marginBottom: "16px",
   [theme.breakpoints.down("md")]: {
    fontSize: "1.094rem",
  },
  [theme.breakpoints.up("md")]: {
    width: "10%",
  },
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
    fontSize: "1rem",
  },
  },
  headerText: {
  },

  listItems: {
  },
  footerText: {
    fontFamily: "Poppins",
    fontSize: "1.4rem",
    color: "#09334F",
    textAlign: "center",
    padding: "1.5rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.094rem",
    },
  },
}));