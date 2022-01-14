import Head from "next/head";
import Image from "next/image";

import Layout from "../src/components/layout/layout";
import Structuras from "../src/components/structura/structura";


export default function structura() {
   return (
      <>
         <Head>
            <title>Hydroengeo</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <Layout>
            <Structuras />
         </Layout>
      </>
   );
}
