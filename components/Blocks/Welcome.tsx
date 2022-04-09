import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

import Worlds from "../Worlds";

const Welcome = () => {
  return (
    <>
      <Flex
        bgImage="images/starBackground.jpeg"
        bgSize="contain"
        alignItems="center"
        justifyContent="flex-start"
        flexDir="column"
        h="100vh"
        id="home"
        width="100%"
      >
        <Heading
          sx={{ wordSpacing: "5px" }}
          letterSpacing="2px"
          mt="18vh"
          fontSize={{ base: "1.6rem", sm: "2.2rem", md: "3rem" }}
        >
          <Text color="rgba(255,255,255, 0.4)" as="span">
            DISCOVER NEW
          </Text>{" "}
          WORLDS
        </Heading>
        <Worlds />
      </Flex>
    </>
  );
};

export default Welcome;
