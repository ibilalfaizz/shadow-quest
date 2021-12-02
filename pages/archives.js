import Head from "../Components/Head";
import Archives from "../Components/Others/Archives";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Archive = () => {
  return (
    <div>
      <Head />

      <div className="container-fluid p-0 body-7">
        <Navbar />
        <Archives />
        <Footer />
      </div>
    </div>
  );
};
export default Archive;
