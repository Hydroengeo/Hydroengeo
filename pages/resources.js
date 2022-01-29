import Head from "next/head";
import Layout from "../src/components/layout/layout";

import Resources from "../src/components/resources/resources";

const ResourcesPage = () => {
  return (
    <>
      <Head>
        <title>Hydroengeo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Resources />
      </Layout>
    </>
  );
};

export default ResourcesPage;