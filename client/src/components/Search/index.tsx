import React from "react";
import SearchBox from "../SearchBox";
import useStyles from "./styles";

const index = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h3>search for username</h3>
      <SearchBox />
      <span>see suggestion</span>
    </div>
  );
};

export default index;
