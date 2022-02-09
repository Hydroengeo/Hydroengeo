import Head from "next/head";
import Image from "next/image";

import Layout from "../../src/components/layout/layout";
import Scientific from "../../src/components/scientific/scientific";

export default function scientific() {
  return (
    <>
      <Head>
        <title>Hydroengeo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Scientific />
      </Layout>
    </>
  );
}