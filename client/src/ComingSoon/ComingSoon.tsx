import { Typography } from "@material-ui/core";
import useStyles from "./styles";

const CommingSoon = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.comingsoon}>Coming soon</Typography>
    </div>
  );
};

export default CommingSoon;