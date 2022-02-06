import Head from "next/head";
import Image from "next/image";

import Layout from "../../src/components/layout/layout";
import Managements from "../../src/components/management/management";

export default function management() {
  return (
    <>
      <Head>
        <title>Hydroengeo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Managements />
      </Layout>
    </>
  );
}
