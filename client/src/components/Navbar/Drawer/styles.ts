import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export default makeStyles((theme: Theme) => ({ 
root: {
  // backgroundColor: theme.palette.background.default,
},
header: {
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "space-between",
},
}));