import Head from "next/head";

import Layout from "../src/components/layout/layout";
import Governance from "../src/components/governance/governance";

export default function governance() {
  return (
    <>
      <Head>
        <title>Hydroengeo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Governance />
      </Layout>
    </>
  );
}
