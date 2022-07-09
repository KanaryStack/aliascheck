import Head from "next/head";
import { motion } from "framer-motion";
import AnimatedText from "../components/AnimatedText";

const Home = () => {
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.3,
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

      <motion.div initial="hidden" animate={"visible"} variants={container}>
        <div className="container">
          <AnimatedText as="h1" text="Alias Check">
            coming soon
          </AnimatedText>
        </div>
      </motion.div>
    </>
  );
};

// const Home = () => {
//   return (
//     <div>
//       <Head>
//         <title>Alias Check</title>
//         <meta name="description" content="Choose an Alias for any social platform before anyone" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//     </div>
//   );
// };

export default Home;
