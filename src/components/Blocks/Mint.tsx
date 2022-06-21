import {
  Button,
  Flex,
  Heading,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import useFetchCollectionStats from "../../hooks/useFetchCollectionStats";
import { useContractWrite, useContractRead, useAccount } from "wagmi";
import { ethers } from "ethers";

import { worldsAddress, worldsAbi } from "../../abis/worldsAbi";

const Mint = () => {
  const { data: account } = useAccount();
  const [mintButtonText, setMintButtonText] = useState("Wallet Not Detected");
  const [sliderValue, setSliderValue] = useState(1);
  const [price, setPrice] = useState("0.001");
  const collectionStats = useFetchCollectionStats();

  useEffect(() => {
    setPrice(Number(sliderValue * 0.001).toFixed(3));
  }, [sliderValue]);

  useEffect(() => {
    if (account?.address) {
      setMintButtonText("Mint");
      return;
    }
    setMintButtonText("Wallet Not Detected");
  }, [account]);

  const { isError, isLoading, write } = useContractWrite(
    {
      addressOrName: worldsAddress,
      contractInterface: worldsAbi,
    },
    "mintWorlds",
    {
      args: sliderValue,
      overrides: {
        value: ethers.utils.parseEther(String(price)),
      },
    }
  );

  const handleMint = async () => {
    write();
    if (isError) {
      setMintButtonText("Mint Failed!");
      setTimeout(() => {
        setMintButtonText("Mint");
      }, 3000);
    }
  };

  return (
    <Flex
      id="mint"
      bgImage="images/starBackground.jpeg"
      bgSize="contain"
      w="100%"
      h="100vh"
      direction="column"
      alignItems="center"
    >
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        pt="5vh"
      >
        <Flex alignItems="center" direction="column">
          <Heading
            sx={{ wordSpacing: "5px" }}
            letterSpacing="2px"
            mb="7vh"
            mt="10vh"
            fontSize={{ base: "1.9rem", sm: "2.5rem", md: "3rem" }}
          >
            <Text color="rgba(255,255,255, 0.4)" as="span">
              Mint Your
            </Text>{" "}
            World
          </Heading>
          <Flex
            borderRadius="8px"
            height="130px"
            w="300px"
            border="3px solid #BBBBBB "
            justifyContent="center"
            direction="column"
            px="20px"
            mb="8vh"
          >
            {!isLoading ? (
              <>
                <Flex alignItems="center" justifyContent="space-between">
                  <Text fontSize="1.1rem">Amount</Text>
                  <Text fontSize="1.1rem">Price</Text>
                </Flex>
                <Flex justifyContent="space-between">
                  <Text fontSize="2rem">{sliderValue}</Text>
                  <Text fontSize="2rem">Ξ {price}</Text>{" "}
                </Flex>{" "}
              </>
            ) : (
              <Flex justifyContent="center" w="100%">
                <Spinner size="lg" />
              </Flex>
            )}
          </Flex>
          <Slider
            onChange={(val) => setSliderValue(val)}
            aria-label="slider-ex-1"
            defaultValue={1}
            min={1}
            max={111 - Number(collectionStats.count)}
          >
            <SliderMark value={1} mt="1" ml="-2.5" fontSize="sm">
              1
            </SliderMark>

            <SliderMark value={111} mt="1" ml="-2.5" fontSize="sm">
              {111 - Number(collectionStats.count)}
            </SliderMark>
            <SliderTrack>
              <SliderFilledTrack bg="#BBBBBB" />
            </SliderTrack>
            <SliderThumb bg="dimWhite" />
          </Slider>
          <Button
            letterSpacing="2px"
            fontSize="1.4rem"
            h="60px"
            w="300px"
            mt="6vh"
            variant="basic"
            onClick={handleMint}
          >
            {mintButtonText}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Mint;
