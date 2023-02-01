import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "7rem 0",
    marginBottom: "3rem",

    [theme.breakpoints.down("lg")]: {},
    // [theme.breakpoints.down("md")]: {
    //   borderBottom: "none",
    // },
    // [theme.breakpoints.down("sm")]: {
    // },
    // [theme.breakpoints.down("xs")]: {
    // },
  },
  heroContent: {
    maxWidth: "600px",
  },

  typing_effect: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    paddingBottom: "1rem",

    "& h2:nth-child(1)": {
      color: "#355c7d",
      fontFamily: "'Fira Code', monospace",
      fontWeight: "800",
      fontSize: "20px",
      whiteSpace: "nowrap",
      overflow: "hidden",
      width: "max-content",
      animation: "type 7s steps(40,end) forwards",
    },

    "& h2:nth-child(2)": {
      fontFamily: "'Work Sans', sans-serif",
      margin: "0 auto auto 5%",
      background: "linear-gradient(to right, #f8b195, #f67280, #c06c84)",
      fontWeight: "800",
      fontSize: "1.5rem",
      lineHeigh: "1.2",
      width: "0",
      whiteSpace: "nowrap",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      overflow: "hidden",
      animation: "type 7s steps(40,end) 7s infinite",

      "& > span": {
        background: "#FAB535",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "#FAB535",
      },
    },
  },

  "@global @keyframes type": {
    "0%": {
      width: "0",
    },
    "1%, 99%": {
      borderRight: "1px solid #FAB535",
    },
    "100%": {
      borderRight: "none",
      width: "42%",
    },
  },

  hero: {
    textAlign: "center",
    fontWeight: 600,
    fontSize: "3rem",
  },

  hero_fun: {
    color: "#FAB535",
    margin: "0 .125rem",
    marginLeft: ".5rem",
  },
}));
