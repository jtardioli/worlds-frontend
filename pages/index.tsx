import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../src/components/Navbar/Navbar";
import Worlds from "../src/components/worlds";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Worlds</title>
        <meta name="description" content="Your own personal solor system" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex
        bgImage="images/starBackground.jpeg"
        bgSize="contain"
        alignItems="center"
        justifyContent="flex-start"
        flexDir="column"
        h="100vh"
      >
        <Navbar />
        <Worlds />
        <Heading
          sx={{ wordSpacing: "5px" }}
          letterSpacing="2px"
          mt="5vh"
          fontSize="3rem"
        >
          <Text color="rgba(255,255,255, 0.4)" as="span">
            {" "}
            DISCOVER NEW
          </Text>{" "}
          WORLDS
        </Heading>
      </Flex>
    </div>
  );
};

export default Home;
