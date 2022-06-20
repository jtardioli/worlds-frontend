import { Flex, Text } from "@chakra-ui/react";

interface Props {
  description: string;
  stat: string;
}

const StatsCard = ({ description, stat }: Props): JSX.Element => {
  return (
    <Flex
      borderRadius="8px"
      height="110px"
      w={{ base: "100%", md: "165px", lg: "260px" }}
      border="solid #BBBBBB 2px"
      justifyContent="center"
      direction="column"
      pl="20px"
      mb="2vh"
      mx="1%"
    >
      <Text fontSize="1.1rem">{description}</Text>
      <Text fontSize="2rem">{stat}</Text>
    </Flex>
  );
};

export default StatsCard;
