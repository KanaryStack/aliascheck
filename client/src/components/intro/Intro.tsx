import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// import { motion } from "framer-motion";
import Image from "next/image";
import useStyles from "./styles";

function Intro() {
  const theme = useTheme();
  console.log(theme.palette.mode);
  const background = theme.palette.background;
  console.log(background);

  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.outerBox}>
        <Box sx={{ p: 4 }}>
          <Typography variant="h1" className={classes.hero} sx={{ m: 1 }}>
            Finding unique usernames is
            <span className={classes.hero_fun}>fun</span> with{" "}
            <span style={{ fontWeight: "bolder" }}>Aliascheck</span>
          </Typography>
          <Typography sx={{ fontSize: "1.4rem", textAlign: "center", p: 1 }}>
            We help you find find unique usernames early so that you can claim
            them. We understand the need of wanting to stand out on social media
            with usernames and how fustraing finding a unique one can be
          </Typography>
        </Box>
      </Box>
      {/* <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.5 },
          visible: {
            opacity: 1,
            transition: { delay: 0.6, ease: "circInOut" },
          },
        }}
      > */}
      <Box className={classes.bottom}>
        <Image
          src="/intro/yellow.svg"
          alt="botto yellow"
          width="275px"
          height="80px"
        />
      </Box>
      {/* </motion.div> */}
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
