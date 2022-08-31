import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Alias Check</title>
        <meta
          name="description"
          content="Choose an Alias for any social platform before anyone"
        />
      </Head>
      <Container maxWidth="lg">
        <Box
          sx={{
            my: 4,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            AliasCheck - Nextjs + Typescript + Material UI
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Home;
