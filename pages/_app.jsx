import React from "react";
import Head from "next/head";
import Layout from "@/components/layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Tiny Hardware Club</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
