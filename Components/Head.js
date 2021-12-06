import Head from "next/head";

const HeadCustom = () => {
  return (
    <Head>
      <title>SHADOW QUEST | 影の探求 </title>

      <meta
        content="SHADOW QUEST | 影の探求 - Battle 9,996 epic hand-drawn warriors in this strategic staking game to win precious $HONR and glorious rewards! Launching December."
        name="description"
      />
      <meta content="SHADOW QUEST" property="og:title" />
      <meta
        content="SHADOW QUEST | 影の探求 - Battle 9,996 epic hand-drawn warriors in this strategic staking game to win precious $HONR and glorious rewards! Launching December."
        property="og:description"
      />
      <meta property="og:image" content="/assets/images/meta-image.png" />
      <meta property="twitter:title" content="SHADOW QUEST" />
      <meta
        content="SHADOW QUEST | 影の探求 - Battle 9,996 epic hand-drawn warriors in this strategic staking game to win precious $HONR and glorious rewards! Launching December."
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
