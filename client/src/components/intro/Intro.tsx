import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import useStyles from "./styles";

function Intro() {
  const theme = useTheme();
  const background = theme.palette.background;

  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.outerBox}>
        <Box className={classes.outerBox_content} sx={{ px: 8}}>
          <Typography variant="h1" className={classes.hero} sx={{ m: 1 }}>
            Finding unique usernames is
            <span className={classes.hero_fun}>@fun</span> with{" "}
            <span style={{ fontWeight: "bolder" }}>Aliascheck</span>
          </Typography>
          <Typography className={classes.hero_article}  sx={{ textAlign: "center" }}>
            We help you find unique usernames early so that you can claim
            them. We understand the need of wanting to stand out on social media
            with usernames and how frustrating finding a unique one can be.
          </Typography>
        </Box>
      </Box>
      <Box className={classes.bottom}>
        <Image
          src="/intro/yellow.svg"
          alt="bottom yellow"
          width="275px"
          height="80px"
        />
      </Box>
      <Box className={classes.topL}>
        <Image
          src="/intro/left.svg"
          alt="top left"
          width="246.77px"
          height="80px"
        />
      </Box>
      <Box className={classes.topR}>
        <Image
          src="/intro/right.svg"
          alt="top right"
          width="236.77px"
          height="90px"
        />
      </Box>
      <Box
        className={classes.topBox}
        sx={{
          background:
            theme.palette.mode == "light" ? background.default : "black",
        }}
      ></Box>
      <Box className={classes.leftBox}></Box>
      <Box className={classes.rightBox1}></Box>
      <Box className={classes.rightBox2}></Box>
    </Box>
  );
}

export default Intro;
