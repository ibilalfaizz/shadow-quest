import Head from "next/head";
import Archives from "../Components/Others/Archives";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Archive = () => {
  return (
    <div>
      <Head>
        <title>Zenchō | 前兆 </title>

        <meta
          content="Zenchō | 前兆 - Join 9,996 hand-drawn anime warriors for the fight that will end all other fights. Launching November."
          name="description"
        />
        <meta content="Zenchō" property="og:title" />
        <meta
          content="Zenchō | 前兆 - Join 9,996 hand-drawn anime warriors for the fight that will end all other fights. Launching November."
          property="og:description"
        />
        <meta property="og:image" content="/assets/images/meta-image.png" />
        <meta property="twitter:title" content="Zenchō" />
        <meta
          content="Zenchō | 前兆 - Join 9,996 hand-drawn anime warriors for the fight that will end all other fights. Launching November."
          property="twitter:description"
        />
        <meta
          content="/assets/images/meta-image.png"
          property="twitter:image"
        />
        <meta property="og:type" content="website" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta property="og:image:width" content={300} />
        <meta property="og:image:height" content={300} />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container-fluid p-0 body-7">
        <Navbar />
        <Archives />
        <Footer />
      </div>
    </div>
  );
};
export default Archive;
