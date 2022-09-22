import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "0.3rem",
    width: "100%", 
    maxWidth: "1200px",

    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      justifyContent: "center",  
      alignItems: "center",
      gap: "1rem",
    },
  },

  inputGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    "& > input": {
      width: "99%",
      padding: "0.6rem 1rem",
      outline: "0",
      border: "0",
      color: theme.palette.secondary.light,
      borderRadius: "1px",
      boxShadow: `0 0 1px ${theme.palette.secondary.light}`,
    },
    "& > input::placeholder": {
      color: theme.palette.secondary.light,
    },
    "& > input:focus": {
      boxShadow: `0 0 2px ${theme.palette.secondary.light}`,
    },
    "& > p": {
      color: theme.palette.primary.contrastText,
      fontSize: "0.6rem",
      textAlign: "center",
    },

    [theme.breakpoints.up("xs")]: {
      "& > input": {
        width: "95%",
      },
    },

    [theme.breakpoints.up("sm")]: {
      "& > p": {
        fontSize: "0.7rem",
      },
    },

    [theme.breakpoints.up("md")]: {
      "& > input": {
        width: "90%",
      },
    },

    /**============== TABLET ================ */
    [theme.breakpoints.up("lg")]: {
      width: "60%",
      alignItems: "flex-start",

      "& > input": {
        width: "100%",
        padding: "1rem",
        fontSize: "1rem",
      },

      "& > input::placeholder": {
        fontSize: "0.9rem",
      },
    },
  },
  button: {
    padding: "0.6rem 1.2rem",
    width: "max-content",
    textTransform: "capitalize",
    fontSize: "0.9rem",
    justifySelf: "center",
    alignSelf: "center",
    color: theme.palette.primary.contrastText,
    background: theme.palette.primary.main,
    border: 0,
    borderRadius: "2px",
    cursor: "pointer",
    transition: "all 0.3s ease",

    "&:hover": {
      transform: "scale(0.9)",
    },

    [theme.breakpoints.up("sm")]: {
      fontSize: "1rem",
    },

    [theme.breakpoints.up("md")]: {
      marginTop: "0",
    },

    [theme.breakpoints.up("lg")]: {
      alignSelf: "flex-start",
      padding: "1rem 2rem",
    },
  },
}));
