import Head from "../Components/Head";

import Nations from "../Components/HerosSection/Nations";
import FaqSection from "../Components/faq/FaqSection";
import Footer from "../Components/Footer";
import HeroBanner from "../Components/HeroBanner";
import Navbar from "../Components/Navbar";
import RoadMapSection from "../Components/RoadMapSection";

import FightToEarn from "../Components/FightToEarn";
import TeamSection from "../Components/TeamSection";

const Home = () => {
  return (
    <div>
      <Head />

      <div className="container-fluid p-0 ">
        <Navbar />
        <HeroBanner />
        <FightToEarn />

        <Nations />

        <RoadMapSection />
        <TeamSection />

        <FaqSection />
        <Footer />
      </div>
    </div>
  );
};
export default Home;
