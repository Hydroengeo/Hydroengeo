import Head from "next/head";

import Layout from "../src/components/layout/layout";
import Overture from "../src/components/overture/overture";

const OverturePage = () => {
  return (
    <>
      <Head>
        <title>Hydroengeo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Overture />
      </Layout>
    </>
  );
};

export default OverturePage;