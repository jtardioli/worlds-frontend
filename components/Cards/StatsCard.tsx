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
      w="240px"
      border="solid #BBBBBB 2px"
      justifyContent="center"
      direction="column"
      pl="20px"
    >
      <Text fontSize="1.1rem">{description}</Text>
      <Text fontSize="2rem">{stat}</Text>
    </Flex>
  );
};

export default StatsCard;
