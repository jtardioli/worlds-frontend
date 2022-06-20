import Head from "next/head";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Worlds | 111 Worlds NFTs</title>
        <meta name="description" content="Your own personal solor system" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  );
};
