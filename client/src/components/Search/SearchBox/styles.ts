import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2rem",
    width: "90%",
    maxWidth: "1600px",

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
    width: "100%",
    gap: "0.5rem",

    [theme.breakpoints.up("md")]: {
      width: "90%",
    },

    /**============== TABLET ================ */
    [theme.breakpoints.up("lg")]: {
      width: "60%",
      alignItems: "flex-start",
    },
  },

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
