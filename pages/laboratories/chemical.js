import Head from "next/head";

import Layout from "../../src/components/layout/layout";
import Chemical from "../../src/components/chemical/chemical";

export default function chemical() {
  return (
    <>
      <Head>
        <title>Hydroengeo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Chemical />
      </Layout>
    </>
  );
}
