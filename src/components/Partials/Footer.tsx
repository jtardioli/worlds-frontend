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
      <a
        href="https://rinkeby.etherscan.io/address/0x2051fe3596cab7f5a1d93913cce4aa0e0399779c#code"
        target="_blank"
        rel="noreferrer"
      >
        Contract
      </a>
      <a href="https://twitter.com/WorldsNFT_" target="_blank" rel="noreferrer">
        Twitter
      </a>
      <a
        href="https://discord.com/invite/zZcbUmYgaC"
        target="_blank"
        rel="noreferrer"
      >
        Discord
      </a>
    </Flex>
  );
};

export default Footer;
