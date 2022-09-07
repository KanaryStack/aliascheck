import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Home: NextPage = () => {
  return (
    <>
      <Box>
        <Head>
          <title>Alias Check</title>
          <meta
            name="description"
            content="Choose an Alias for any social platform before anyone"
          />
        </Head>
      </Box>
    </>
  );
};

export default Home;
