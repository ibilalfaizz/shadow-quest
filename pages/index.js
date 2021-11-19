import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import CategorySection from "../Components/CategorySection/CategorySection";
import EighthSection from "../Components/EighthSection";
import FaqSection from "../Components/faq/FaqSection";
import FifthSection from "../Components/FifthSection";
import Footer from "../Components/Footer";
import FourthSection from "../Components/FourthSection";
import HeroBanner from "../Components/HeroBanner";
import Navbar from "../Components/Navbar";
import RoadMapSection from "../Components/RoadMapSection";

import SecondSection from "../Components/SecondSection";
import SixthSection from "../Components/SixthSection";
import SliderSection from "../Components/SliderSection";
import TeamSection from "../Components/TeamSection";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Zenchō </title>

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

      <div className="container-fluid p-0 ">
        <Navbar />
        <HeroBanner />
        <SecondSection />
        <CategorySection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
        {/* <SliderSection /> */}
        <EighthSection />
        <TeamSection />
        <RoadMapSection />
        <FaqSection />
        <Footer />
      </div>
    </div>
  );
};
export default Home;
