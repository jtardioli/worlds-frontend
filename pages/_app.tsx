import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { worldsTheme } from "../styles/theme";
import { WalletContext } from "../contexts/WalletContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={worldsTheme}>
      <WalletContext>
        <Component {...pageProps} />
      </WalletContext>
    </ChakraProvider>
  );
}

export default MyApp;
