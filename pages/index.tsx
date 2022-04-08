import { Box, Button, Flex, Heading, ScaleFade, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import Worlds from "../components/Worlds";
import StatsCard from "../components/Cards/StatsCard";

import { useInViewport } from "react-in-viewport";
import { useRef } from "react";
import Footer from "../components/Partials/Footer";
import Link from "next/link";
import Welcome from "../components/Blocks/Welcome";
import About from "../components/Blocks/About";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Worlds | Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Your own personal solor system" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Welcome />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
