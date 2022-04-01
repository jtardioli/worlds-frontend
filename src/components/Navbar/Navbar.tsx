import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      w="100%"
      minH="12vh"
      padding="0 80px"
    >
      <Flex flexBasis="100%" fontSize="1.4rem">
        Worlds
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
        <Button variant="basic">Connect wallet</Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
