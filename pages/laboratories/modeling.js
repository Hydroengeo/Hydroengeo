import Head from "next/head";
import Image from "next/image";

import Layout from "../../src/components/layout/layout";
import Modeling from "../../src/components/modeling/modeling";

export default function modeling() {
  return (
    <>
      <Head>
        <title>Hydroengeo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Modeling />
      </Layout>
    </>
  );
}
