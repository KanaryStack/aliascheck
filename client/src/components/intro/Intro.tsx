import React from "react";
import { Box, Typography } from "@mui/material";
import useStyles from "./styles";
import clsx from "clsx";

function Intro() {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.heroContent}>
        <Box className={clsx(classes.typing_effect)}>
          <Typography component="h2">Hi, I found a username</Typography>
          <Typography component="h2">
            @johnDoe_<span className={classes.hero_fun}>🤗😎😉</span>
          </Typography>
        </Box>
        <Typography variant="h1" component="h2" className={classes.hero}>
          Find a unique <span className={classes.hero_fun}>username</span> for
          social platforms
        </Typography>
      </Box>
    </Box>
  );
}

export default Intro;
