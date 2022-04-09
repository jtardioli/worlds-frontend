import React, { createContext, ReactNode, useContext, useState } from "react";
import Onboard, { WalletState } from "@web3-onboard/core";
import injectedModule from "@web3-onboard/injected-wallets";
import { getShortenedAddress } from "../utils/utils";

const MAINNET_RPC_URL = `https://mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_KEY}`;

const injected = injectedModule();
const onboard = Onboard({
  wallets: [injected],
  chains: [
    {
      id: "0x1", // chain ID must be in hexadecimel
      token: "ETH", // main chain token
      label: "Ethereum Mainnet",
      rpcUrl: MAINNET_RPC_URL, // rpcURL required for wallet balances
    },

    // {
    //   id: "0x89",
    //   token: "MATIC",
    //   label: "Matic Mainnet",
    //   rpcUrl: "https://matic-mainnet.chainstacklabs.com",
    // },
  ],
  appMetadata: {
    name: "Worlds NFT",
    icon: "/images/worldsLogoTransparent.png",
    logo: "/images/worldsLogoTransparent.png",
    description: "Your own personal solar system.",
    recommendedInjectedWallets: [
      { name: "MetaMask", url: "https://metamask.io" },
      { name: "Coinbase", url: "https://wallet.coinbase.com/" },
    ],
  },
});

const walletContext = createContext(null as any);

export const WalletContext = ({ children }: { children: ReactNode }) => {
  const [wallets, setWallets] = useState<WalletState[]>([]);
  const [connectButtonText, setConnectButtonText] = useState("Connect Wallet");
  const connectWalletHandler = async () => {
    const getWallets = await onboard.connectWallet();
    setWallets(getWallets);
    if (getWallets.length > 0) {
      console.log(getWallets);
      setConnectButtonText(
        getWallets[0].accounts[0].ens!?.name ??
          getShortenedAddress(getWallets[0].accounts[0].address)
      );
    }
  };
  const values = { connectWalletHandler, wallets, connectButtonText };

  return (
    <walletContext.Provider value={values}>{children}</walletContext.Provider>
  );
};

export const useWallet = () => {
  return useContext(walletContext);
};
