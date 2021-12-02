import Head from "next/head";

const HeadCustom = () => {
  return (
    <Head>
      <title>SHADOW QUEST | シャドウクエスト </title>

      <meta
        content="SHADOW QUEST | シャドウクエスト - Join 9,996 hand-drawn anime warriors for the fight that will end all other fights. Launching November."
        name="description"
      />
      <meta content="SHADOW QUEST" property="og:title" />
      <meta
        content="SHADOW QUEST | シャドウクエスト - Join 9,996 hand-drawn anime warriors for the fight that will end all other fights. Launching November."
        property="og:description"
      />
      <meta property="og:image" content="/assets/images/meta-image.png" />
      <meta property="twitter:title" content="SHADOW QUEST" />
      <meta
        content="SHADOW QUEST | シャドウクエスト - Join 9,996 hand-drawn anime warriors for the fight that will end all other fights. Launching November."
        property="twitter:description"
      />
      <meta content="/assets/images/meta-image.png" property="twitter:image" />
      <meta property="og:type" content="website" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta property="og:image:width" content={300} />
      <meta property="og:image:height" content={300} />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
export default HeadCustom;
