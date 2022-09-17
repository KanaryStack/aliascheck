import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",

    "& > h3": {
      textTransform: "capitalize",
      padding: "0",
      marign: "0",
    },

    "& > span": {
      display: "inline-block",
      marginTop: "1rem",
      marginRight: "1rem",
      fontSize: "0.8rem",
      textDecoration: "underline",
      cursor: "pointer",
      alignSelf: "flex-end",
    },

    "& > span:hover": {
      color: theme.palette.primary.main,
    },
    "& > span:active": {
      color: theme.palette.primary.main,
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
        marginTop: "0",
      },
    },
  },
}));
