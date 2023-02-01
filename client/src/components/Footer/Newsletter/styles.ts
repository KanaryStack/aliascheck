
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export default makeStyles((theme: Theme) => ({
  input: {
    width: "95%",
    background: "white",
    "::placeholder": {
      color: "#000",
            },
  },
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
      color: "black",
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
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '.17rem 1rem',
    border: '.0031rem solid',
    color: "#F0FDF4",
    backgroundColor: "#09334F",
    margin: "1rem 0",
    "&:hover": {
      transform: "scale(0.9)",
      backgroundColor: '#09334F',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
}));