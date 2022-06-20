import { Button, Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { ConnectButton } from "@rainbow-me/rainbowkit";

interface Window {
  ethereum: any;
}

const Navbar = () => {
  const [display, setDisplay] = useState("none");
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      w="100%"
      minH="12vh"
      px={{ base: "10px", md: "80px" }}
      position="fixed"
      bg="black"
      zIndex={3}
    >
      <Flex
        alignItems="center"
        position="relative"
        flexBasis="100%"
        fontSize="1.4rem"
        mr="5px"
      >
        <Image
          src="/images/worldsLogoTransparent.png"
          height="35px"
          width="35px"
          alt="Worlds Logo"
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
        minW="350px"
        display={{ base: "none", lg: "flex" }}
      >
        <a href="#home">Home</a>

        <a href="#about">About</a>

        <a href="#mint">Mint</a>

        <a
          href="https://discord.gg/xctJ3H63KT"
          target="_blank"
          rel="noreferrer"
        >
          Community
        </a>
      </Flex>
      <Flex alignItems="center" justify="flex-end" flexBasis="100%">
        <ConnectButton showBalance={false} accountStatus="address" />
      </Flex>
      <Flex>
        <IconButton
          ml="10px"
          display={{ base: "flex", lg: "none" }}
          aria-label="Open Menu"
          size="lg"
          variant="ghost"
          _hover={{ bg: "none" }}
          _active={{ bg: "none" }}
          icon={<HamburgerIcon />}
          onClick={() => {
            setDisplay("flex");
          }}
        />
      </Flex>
      <Flex
        flexDirection="column"
        alignItems="center"
        w="100vw"
        height="100vh"
        display={display}
        bg="black"
        position="fixed"
        top="0"
        left="0"
        overflow="auto"
      >
        <Flex m="10px 15px" alignSelf="flex-end">
          <IconButton
            onClick={() => {
              setDisplay("none");
            }}
            aria-label="Close Menu"
            icon={<CloseIcon />}
            variant="ghost"
            _hover={{ bg: "none" }}
            _active={{ bg: "none" }}
          />
        </Flex>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          direction="column"
          height="50vh"
          mt="10vh"
        >
          <Button
            fontSize="2rem"
            _active={{ bg: "none" }}
            _hover={{ bg: "none" }}
            bg="none"
            onClick={() => {
              setDisplay("none");
            }}
          >
            <a href="#home">Home</a>
          </Button>
          <Button
            fontSize="2rem"
            _active={{ bg: "none" }}
            _hover={{ bg: "none" }}
            bg="none"
            onClick={() => {
              setDisplay("none");
            }}
          >
            <a href="#about">About</a>
          </Button>
          <Button
            fontSize="2rem"
            _active={{ bg: "none" }}
            _hover={{ bg: "none" }}
            bg="none"
            onClick={() => {
              setDisplay("none");
            }}
          >
            <a href="#mint">Mint</a>
          </Button>
          <Button
            fontSize="2rem"
            _active={{ bg: "none" }}
            _hover={{ bg: "none" }}
            bg="none"
            onClick={() => {
              setDisplay("none");
            }}
          >
            <a
              href="https://discord.gg/xctJ3H63KT"
              target="_blank"
              rel="noreferrer"
            >
              Community
            </a>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
