import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { worldsTheme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={worldsTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
