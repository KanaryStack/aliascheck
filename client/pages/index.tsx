import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Search from "../src/components/Search";
import Hint from "../src/components/Hint";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import { UserInfoProvider } from "../src/utils/userInfoContext";

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
      {/**===============================================
       *
       * UserInfoProvider uses the contextAPI to provide access to
       * state to all components
       *
       * All child elements needs to be wrapped with the
       * [UseinfoProvider]
       *
       *  =====================================*/}
      <UserInfoProvider>
        <Navbar />
        <Search />
        <Hint />
        <Footer />
      </UserInfoProvider>
    </>
  );
};

export default Home;
