import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Flex
      height="6vh"
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
  );
};

export default Footer;
