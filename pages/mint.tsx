import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import React, { useEffect } from "react";

const Mint: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Worlds | Mint</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Mint your own personal solor system"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Mint;
