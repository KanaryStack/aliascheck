
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export default makeStyles((theme: Theme) => ({
  root: {
    marginTop: "3.75rem",
    flexGrow: 1,
    backgroundColor: "#FAB535",
  },

  section: {
    [theme.breakpoints.down("xs")]: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(12.5rem, 1fr))",
      // gridAutoRows: "auto",
      // gridGap: ".0625rem",
      margin: "0 3.2rem",
      maxWidth: "100%",
    },
  },

  headerText: {
    fontWeight: 900,
    color: "#09334F",
    textAlign: "center",
    fontSize: "1.6rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.2rem",
    }
  },

  listItems: {
    fontFamily: "Poppins",
    color: "#09334F",
    listStyle: "none",
    cursor: "pointer",
    textAlign: "center",
    diplay: "flex",
    flexDirection: "column",
    fontSize: "1.2rem",
    padding: "0 2rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    }
  },
  footerText: {
    fontFamily: "Poppins",
    fontSize: "1.1rem",
    color: "#09334F",
    textAlign: "center",
  },
}));