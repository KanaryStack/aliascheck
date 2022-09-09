import React from "react";

import { Typography, Box, useMediaQuery } from "@mui/material";
import useStyles from "./styles";
import Image from "next/image";

const Navbar = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <>
      <Box className="classes.container">
        {matches && (
          <Box className={classes.top}>
            <Image src="/top.png" alt="top" width={200} height={50} />
          </Box>
        )}
        <Box className={classes.aligned}>
          {/* <Box> */}
          <Typography variant="h2" className={classes.title}>
            Aliascheck
          </Typography>
          <Box className={classes.headTitle}>
            <Typography className={classes.subtitle}>
              <span className={classes.span}>Finding unique usernames</span>{" "}
              <span className={classes.span}>just got easier </span>
              {!matches && <span className={classes.span}>with</span>}
              {!matches && <b style={{ display: "block" }}>Aliascheck</b>}
            </Typography>
            <Box className={classes.image}>
              <Image
                src={`/${matches ? "image" : "iphone"}.svg`}
                alt="cellphone"
                width={450}
                height={750}
              />
            </Box>
          </Box>
          <Typography className={classes.description}>
            We help you find unique usernames early so that you can claim them.
            <br />
            We understand the need of wanting to stand out on social media with
            usernames and how frustraing finding a unique one can be
          </Typography>
          <Typography className={classes.comingsoon}>Coming soon</Typography>
        </Box>
        {matches && (
          <Box className={classes.bottom}>
            <Image src="/bottom.png" alt="bottom" width={200} height={100} />
          </Box>
        )}
      </Box>
    </>
  );
};

export default Navbar;
