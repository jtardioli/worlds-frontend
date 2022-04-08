import React, { createContext, ReactNode, useContext, useState } from "react";
import Onboard, { WalletState } from "@web3-onboard/core";
import injectedModule from "@web3-onboard/injected-wallets";

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
    name: "Words NFTs",
    icon: "<SVG_ICON_STRING>",
    logo: "<SVG_LOGO_STRING>",
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
  const connectWalletHandler = async () => {
    const getWallets = await onboard.connectWallet();
    setWallets(getWallets);
  };
  const values = { connectWalletHandler, wallets };

  return (
    <walletContext.Provider value={values}>{children}</walletContext.Provider>
  );
};

export const useWallet = () => {
  return useContext(walletContext);
};
