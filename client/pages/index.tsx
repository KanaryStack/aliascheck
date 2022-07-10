import Head from "next/head";
import { motion } from "framer-motion";
import AnimatedText from "../components/AnimatedText";

const Home = () => {
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <>
      <Head>
        <title>Alias Check</title>
        <meta
          name="description"
          content="Choose an Alias for any social platform before anyone"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.div
        variants={container}
        className="min-h-screen flex flex-col items-center bg-black text-white text-5xl justify-center"
      >
        <AnimatedText as="h1" text="Alias Check" size="8rem" />
        <AnimatedText
          as="p"
          text="Be the first to own a username on any social media platform"
          delay="2.5"
          size="1rem"
        />
        <p>Coming Soon...</p>
      </motion.div>
    </>
  );
};

export default Home;
