import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  socialhandles: {
    paddingTop: 5,
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    [theme.breakpoints.only("xl")]: {
      paddingRight: 3,
      paddingLeft: 3,
      marginRight: 2,
      marginLeft: 2,
    },
  },

  span: {},
  button: {
    padding: "0.6rem 1.2rem",
    transition: "all 0.3s ease",

    "&:hover": {
      transform: "scale(0.9)",
    },

    [theme.breakpoints.up("lg")]: {
      alignSelf: "flex-start",
      padding: "0.8rem 2rem",
    },
  },
}));
