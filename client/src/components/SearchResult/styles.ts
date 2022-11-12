import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    justifyContent:"center",
    alignItems: "center",
  },

  socialhandles:{
    paddingTop: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",

    [theme.breakpoints.only("xl")]: {
      paddingRight: 3,
      paddingLeft: 3,
      marginRight: 2,
      marginLeft: 2,
    },
  },

  span: {},

 }))