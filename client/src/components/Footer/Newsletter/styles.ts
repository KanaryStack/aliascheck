
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export default makeStyles((theme: Theme) => ({

  inputItems: {
    "& > input": {
      fontFamily: "Poppins",
      outline: "0",
      border: "0",
      background: "#fff",
      borderRadius: "0.375rem",
      textAlign: "center",
      marginTop: ".6rem",
    },
    "& > input::placeholder": {
      fontSize: ".85rem",
      color: "gray",
    },
    [theme.breakpoints.down("xs")]: {
      "& > input": {
        padding: ".3rem .8rem",
        marginLeft: "1.5rem",
      },
    },
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 6,
      marginTop: 10,
      "& > input": {
        padding: ".3rem .6rem",
      },
    },
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      flexDirection: "column",
      gap: 7,
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& > input::placeholder": {
        fontSize: ".9rem",
      },
    },
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      alignItems: "center",
      "& > input": {
        padding: ".3rem .1rem",
      },
      "& > input::placeholder": {
        fontSize: ".9rem",
      },
    },
    [theme.breakpoints.up("xl")]: {
      padding: "0 2.5rem",
      "& > input": {
        padding: ".3rem 4rem",
      },
      "& > input::placeholder": {
        fontSize: "1rem",
      },
    },
  },

  submit: {
    cursor: "pointer",
    color: "#F0FDF4",
    textTransform: "capitalize",
    transition: "background 1s, color 1s",
    backgroundColor: "#09334F",
    borderRadius: "0.375rem",
    background: theme.palette.primary.main,
    border: 0,
    fontSize: ".75rem",
    marginTop: ".4688rem",
    padding: ".3rem .9rem",

    "&:hover": {
      transform: "scale(0.9)",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "1rem 4rem",
    },
  },
}));