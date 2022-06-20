import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Flex
      height="6vh"
      bottom="0"
      position="absolute"
      w="100%"
      justify="space-between"
      paddingX={{ base: "5%", sm: "15%", md: "25%" }}
    >
      <Text>Smart Contract</Text>

      <a href="https://twitter.com/WorldsNFT_" target="_blank">
        Twitter
      </a>
      <a href="https://discord.gg/xctJ3H63KT" target="_blank">
        Discord
      </a>

      <a
        href="https://editor.p5js.org/jtardioli/sketches/CDf_2NLKa"
        target="_blank"
      >
        Sketch
      </a>
    </Flex>
  );
};

export default Footer;