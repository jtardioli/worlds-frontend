import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { worldsTheme } from "../styles/theme";

import "@rainbow-me/rainbowkit/styles.css";

import {
  getDefaultWallets,
  RainbowKitProvider,
  midnightTheme,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { infuraProvider } from "wagmi/providers/infura";

const { chains, provider } = configureChains(
  [chain.mainnet],
  [infuraProvider({ infuraId: process.env.NEXT_PUBLIC_INFURA_ID })]
);

const { connectors } = getDefaultWallets({
  appName: "Worlds NFT",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={worldsTheme}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider
          theme={midnightTheme({
            accentColor: "white",
            accentColorForeground: "black",
            borderRadius: "large",
            fontStack: "rounded",
          })}
          chains={chains}
        >
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </ChakraProvider>
  );
}

export default MyApp;
