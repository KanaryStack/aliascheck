import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Head>
        <title>Alias Check</title>
        <meta
          name="description"
          content="Choose an Alias for any social platform before anyone"
        />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
