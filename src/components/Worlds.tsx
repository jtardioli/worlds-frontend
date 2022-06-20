import React from "react";
import Script from "next/script";
import { Box } from "@chakra-ui/react";
import Head from "next/head";

const Worlds = () => {
  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.1/p5.min.js"></Script>
      <Script src="images/worldsGenerator.js"></Script>
    </>
  );
};

export default Worlds;
