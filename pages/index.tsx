import { Button, Flex, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Worlds</title>
        <meta name="description" content="Your own personal solor system" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        bgImage="https://images.unsplash.com/photo-1551794804-840faad68ba9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        bgSize="contain"
        alignItems="center"
        justifyContent="flex-start"
        flexDir="column"
        h="100vh"
        padding="50px"
      >
        <Heading>Worlds</Heading>
      </Flex>
    </div>
  );
};

export default Home;
