import Head from "../Components/Head";

import CommunitySubmissions_ from "../Components/Others/CommunitySubmissions";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const communityLore = () => {
  return (
    <div>
      <Head />

      <div className="container-fluid p-0 body-7">
        <Navbar />
        <CommunitySubmissions_ />
        <Footer />
      </div>
    </div>
  );
};
export default communityLore;
