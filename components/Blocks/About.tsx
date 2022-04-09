import { Button, Flex, Heading, ScaleFade, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";
import StatsCard from "../Cards/StatsCard";

const About = () => {
  return (
    <Flex
      id="about"
      bgImage="images/starBackground.jpeg"
      bgSize="contain"
      w="100%"
      direction="column"
      alignItems="center"
      pt="5vh"
      px="2%"
      justifyContent="center"
      pb="10vh"
    >
      <Flex
        // @ts-ignore

        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          alignItems="center"
          direction="column"
          paddingX={{ base: "5%", md: "20%", lg: "25%" }}
        >
          <Heading
            sx={{ wordSpacing: "5px" }}
            letterSpacing="2px"
            mb="7vh"
            mt="10vh"
            fontSize={{ base: "1.9rem", sm: "2.5rem", md: "3rem" }}
          >
            <Text color="rgba(255,255,255, 0.4)" as="span">
              What is
            </Text>{" "}
            Worlds?
          </Heading>
          <Text fontSize={{ base: "0.9rem", sm: "1rem" }}>
            The first epoch contains 111 unique collectible solar systems with
            proof of ownership stored on the Polygon blockchain. Powered by an
            ERC721 contract and p5.js, each new world contains a random number
            of planets, gravitational constant, and orbit pattern.
          </Text>
        </Flex>

        <Flex
          mt="12vh"
          justifyContent="space-between"
          paddingX="10"
          w="100%"
          flexDir={{ base: "column", md: "row" }}
          maxW="1300px"
        >
          <StatsCard description="Mints" stat="0" />
          <StatsCard description="Owners" stat="0" />
          <StatsCard description="Floor" stat="Ξ 0" />
          <StatsCard description="Volume" stat="Ξ 0" />
        </Flex>
      </Flex>
      <Flex
        alignContent="center"
        justifyContent="space-between"
        mt="10vh"
        paddingX="3%"
        width="100%"
        maxW="600px"
      >
        <a href="#mint">
          <Button variant="basic">Mint Now</Button>
        </a>
        <a>
          <Button variant="hollow">View on Opensea</Button>
        </a>
      </Flex>
    </Flex>
  );
};

export default About;
