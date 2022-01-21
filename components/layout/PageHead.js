import Head from "next/head";
function PageHead({ headTitle }) {
  return (
    <>
      <Head>
        <title>
          {headTitle ? headTitle : "Metanetwork - NFT Marketplace App"}
        </title>
        <link rel="icon" href="/favicon.png" />
      </Head>
    </>
  );
}
export default PageHead;
