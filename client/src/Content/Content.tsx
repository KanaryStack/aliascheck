import React from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./styles";
import Image from "next/image";
import ComingSoon from "../ComingSoon/ComingSoon";

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <div className="classes.container">
        <div className={classes.top}>
          <Image src="/top.png" alt="top" width={200} height={50} />
        </div>{" "}
        <div className={classes.aligned}>
          <div>
            <Typography variant="h2" className={classes.title}>
              Aliascheck
            </Typography>
            <Typography className={classes.subtitle}>
              Finding unique usernames
            </Typography>
            <Typography className={classes.subtitle2}>
              just got easier
            </Typography>
            <Typography className={classes.description}>
              We help you find unique usernames early so that you can claim
              them. We understand the need of wanting to stand out on social
              media with usernames and how frustraing finding a unique one can
              be
            </Typography>
            <ComingSoon />
          </div>
          <div className={classes.heroimage}>
            <Image src="/image.svg" alt="cellphone" width={450} height={750} />
          </div>
        </div>
        <div className={classes.bottom}>
          {" "}
          <Image src="/bottom.png" alt="bottom" width={200} height={100} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
