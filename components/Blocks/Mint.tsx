import {
  Button,
  Flex,
  Heading,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useInViewport } from "react-in-viewport";
import StatsCard from "../Cards/StatsCard";

const Mint = () => {
  const [sliderValue, setSliderValue] = useState(1);
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
        // @ts-ignore

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
            <Flex alignItems="center" justifyContent="space-between">
              <Text fontSize="1.1rem">Amount</Text>
              <Text fontSize="1.1rem">Price</Text>
            </Flex>

            <Flex justifyContent="space-between">
              <Text fontSize="2rem">{sliderValue}</Text>
              <Text fontSize="2rem">
                Ξ {Number(sliderValue * 0.01).toFixed(2)}
              </Text>
            </Flex>
          </Flex>
          <Slider
            onChange={(val) => setSliderValue(val)}
            aria-label="slider-ex-1"
            defaultValue={1}
            min={1}
            max={111}
          >
            <SliderMark value={1} mt="1" ml="-2.5" fontSize="sm">
              1
            </SliderMark>

            <SliderMark value={111} mt="1" ml="-2.5" fontSize="sm">
              111
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
          >
            Mint
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Mint;
