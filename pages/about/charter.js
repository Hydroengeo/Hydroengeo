import Head from "next/head";

import Layout from "../../src/components/layout/layout";
import Charter from "../../src/components/charter/charter";

export default function CharterPage() {
  return (
    <>
      <Head>
        <title>Hydroengeo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Charter />
      </Layout>
    </>
  );
}
