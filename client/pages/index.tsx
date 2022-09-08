import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import CommingSoon from "../src/ComingSoon/ComingSoon";

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
      <CommingSoon />
    </>
  );
};

export default Home;
