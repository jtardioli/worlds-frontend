import { Button, Flex, Heading, ScaleFade, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";
import StatsCard from "../Cards/StatsCard";

const About = () => {
  const ref = useRef(null as unknown as HTMLElement);

  const { inViewport } = useInViewport(
    ref,
    { rootMargin: "-200px" },
    { disconnectOnLeave: false },
    {}
  );

  return (
    <Flex
      bgImage="images/starBackground.jpeg"
      bgSize="contain"
      w="100%"
      h="110vh"
      direction="column"
      alignItems="center"
    >
      <ScaleFade initialScale={0.9} in={inViewport}>
        <Flex
          // @ts-ignore
          ref={ref}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Flex alignItems="center" direction="column" paddingX="25%">
            <Heading
              sx={{ wordSpacing: "5px" }}
              letterSpacing="2px"
              mb="7vh"
              mt="10vh"
              fontSize="3rem"
            >
              <Text color="rgba(255,255,255, 0.4)" as="span">
                What is
              </Text>{" "}
              Worlds?
            </Heading>
            <Text>
              The first epoch contains 111 unique collectible solar systems with
              proof of ownership stored on the Polygon blockchain. Powered by an
              ERC721 contract and p5.js, each new world contains a random number
              of planets, gravitational constant, and orbit pattern.
            </Text>
          </Flex>

          <Flex
            mt="12vh"
            justifyContent="space-between"
            paddingX="15%"
            w="100%"
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
          mt="15vh"
          paddingX="30%"
        >
          <Button variant="basic">Mint Now</Button>
          <Button variant="hollow">View on Opensea</Button>
        </Flex>
      </ScaleFade>
    </Flex>
  );
};

export default About;
