import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    gap: "2rem",
    "& > h2": {  
      // textTransform: "capitalize",  
      padding: "0", 
      marign: "0", 
      marginTop: "4rem", 
      fontWeight: 700, 
    },
  }, 
  hintGroup: { 
    display: "flex",
    flexDirection: "column", 
    gap: "2rem",

    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      alignItems: "flex-start",
      gap: "4rem",
    },

    [theme.breakpoints.up("lg")]: {
      justifyContent: "space-between",
      width: "80%",
    },
  },

  hint: {
    display: "flex",
    justifyContent: "center",
    fontWeight: 700,
    flexDirection: "column",
    alignItems: "center",
    padding: "1.5rem 1rem",
    gap: "1.5rem",
    borderRadius: "0.2rem",
    boxShadow: `0 0 1px ${theme.palette.secondary.light}`,

    "& > div": {
      background: theme.palette.primary.main,
      width: "50px",
      aspectRatio: "1/1",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    [theme.breakpoints.up("xs")]: {
      padding: "1.8rem 1.5rem",
    },

    [theme.breakpoints.up("sm")]: {
      padding: "2rem",
    },

    [theme.breakpoints.up("md")]: {
      boxShadow: `none`,
      padding: "0",
      flex: "1",

      "& > p": {
        textAlign: "center",
      },
    },
  },
}));
