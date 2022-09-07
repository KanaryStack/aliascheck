import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  container: {
    maxHeight: "100vh",
    padding: "0",
    margin: "0",
    display: "flex",
    overflow: "hidden",
  },
  main: {
    flex: "1",
    display: "flex",
    flexDirection: "column", 
    justifyContent: "flex-start",
    alignItems: "start",
    fontSize: "5.25rem",
    fontWeight: "bold",
  },
}));
