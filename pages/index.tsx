import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../src/components/Navbar/Navbar";
import Worlds from "../src/components/Worlds";
import StatsCard from "../src/components/Cards/StatsCard";
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
        <Heading
          sx={{ wordSpacing: "5px" }}
          letterSpacing="2px"
          mt="5vh"
          fontSize="3rem"
        >
          <Text color="rgba(255,255,255, 0.4)" as="span">
            DISCOVER NEW
          </Text>{" "}
          WORLDS
        </Heading>
        <Worlds />
      </Flex>
      <Flex
        bgImage="images/starBackground.jpeg"
        bgSize="contain"
        w="100%"
        h="80vh"
        direction="column"
        alignItems="center"
      >
        <Flex direction="column" alignItems="flex-start" padding="0 30% 0 30%">
          <Heading
            sx={{ wordSpacing: "5px" }}
            letterSpacing="2px"
            fontSize="3rem"
            color="rgba(255,255,255, 0.4)"
          >
            What is
          </Heading>
          <Heading
            sx={{ wordSpacing: "5px" }}
            letterSpacing="2px"
            fontSize="3rem"
            mb="3vh"
          >
            Worlds
          </Heading>
          <Text>
            111 unique collectible solar systems with proof of ownership stored
            on the Polygon blockchain. Powered by an ERC721 contract and p5.js,
            each new world contains a random number of planets, gravitational
            constant, and orbit pattern.
          </Text>
        </Flex>

        <Flex mt="27vh" justifyContent="space-between" paddingX="10%" w="100%">
          <StatsCard description="Mints" stat="0" />
          <StatsCard description="Owners" stat="0" />
          <StatsCard description="Floor" stat="Ξ 0" />
          <StatsCard description="Volume" stat="Ξ 0" />
        </Flex>
      </Flex>
      <Flex
        bgImage="images/starBackground.jpeg"
        bgSize="contain"
        w="100%"
        h="50vh"
        direction="column"
        alignItems="center"
      >
        <Flex justifyContent="space-evenly" width="50%" mt="12vh">
          <Button variant="basic">Mint Now</Button>
          <Button variant="hollow">View on Opensea</Button>
        </Flex>
        <Flex
          height="8vh"
          bottom="0"
          position="absolute"
          w="55%"
          justify="space-between"
        >
          <Text>Smart Contract</Text>
          <Text>Twitter</Text>
          <Text>Discord</Text>
          <Text>Sketch</Text>
        </Flex>
      </Flex>
    </div>
  );
};

export default Home;
