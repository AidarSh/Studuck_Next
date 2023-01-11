import Head from "next/head";

import Dev from "../components/Dev";

export default function News() {
  return (
    <>
      <Head>
        <title>Новости</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Dev />
    </>
  );
}
