import Head from "next/head";

import Layout from "../src/components/layout/layout";
import Contacts from "../src/components/contacts/contacts";

const ContactsPage = () => {
  return (
    <>
      <Head>
        <title>Hydroengeo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Contacts />
      </Layout>
    </>
  );
};

export default ContactsPage;