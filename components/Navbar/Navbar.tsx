import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useWallet } from "../../contexts/WalletContext";

interface Window {
  ethereum: any;
}

const Navbar = () => {
  const { connectWalletHandler, connectButtonText } = useWallet();

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      w="100%"
      minH="12vh"
      padding="0 80px"
    >
      <Flex
        alignItems="center"
        position="relative"
        flexBasis="100%"
        fontSize="1.4rem"
      >
        <Image
          src="/images/worldsLogoTransparent.png"
          height="35px"
          width="35px"
        ></Image>
        <Text letterSpacing="1px" ml="10px">
          Worlds
        </Text>
      </Flex>
      <Flex
        flexBasis="100%"
        alignItems="center"
        justifyContent="space-between"
        w="30%"
        fontSize="1rem"
      >
        <Link href="/">
          <a>Home</a>
        </Link>

        <Link href="/mint">
          <a>Mint</a>
        </Link>

        <Link href="/about">
          <a>About</a>
        </Link>

        <Link href="/community">
          <a>Community</a>
        </Link>
      </Flex>
      <Flex alignItems="center" justify="flex-end" flexBasis="100%">
        <Button
          onClick={() => {
            connectWalletHandler();
          }}
          variant="basic"
        >
          {connectButtonText}
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
