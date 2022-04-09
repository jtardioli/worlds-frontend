import type { NextPage } from "next";
import Head from "next/head";
import Welcome from "../components/Blocks/Welcome";
import About from "../components/Blocks/About";
import Footer from "../components/Partials/Footer";
import Mint from "../components/Blocks/Mint";
import Navbar from "../components/Navbar/Navbar";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Worlds NFT | Your Own Personal Solar System</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="The first epoch contains 111 unique collectible solar systems with proof of ownership
              stored on the Polygon blockchain. Powered by an ERC721 contract
              and p5.js, each new world contains a random number of planets,
              gravitational constant, and orbit pattern."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Welcome />
      <About />
      <Mint />
      <Footer />
    </div>
  );
};

export default Home;
