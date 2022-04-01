import React from "react";
import Script from "next/script";
import { Box } from "@chakra-ui/react";

const Worlds = () => {
  return (
    <Box>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.1/p5.min.js"></Script>
      <Script src="images/worldsGenerator.js"></Script>
    </Box>
  );
};

export default Worlds;
