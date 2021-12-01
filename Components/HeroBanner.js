const HeroBanner = () => {
  return (
    <div className=" wf-section banner-video ">
      <video playsInline autoPlay muted loop id="myVideo">
        <source src="/assets/videos/banner-bg.mp4" type="video/mp4" />
      </video>
      <div className="video-inner-container">
        <div className="container ">
          <img
            src="/assets/images/shadow-quest.png"
            style={{ margin: "auto" }}
          />
          <div className="row mt-5">
            <div className="col subtitles">
              <h5>
                5 ARMIES <br />
                <br /> 1 MYSTERIOUS ENEMY <br />
                <br /> 10K GEN0 SOLDIERS <br /> <br />
                <span className="color-red">
                  5 BILLION $HONR <br />
                  <br />
                  TO BE WON{" "}
                </span>
              </h5>
            </div>
            <div className="col"></div>
            <div className="col subtitles">
              <h5>
                A NEW STYLE <br />
                <br /> OF <br />
                <br /> STAKING GAME <br />
                <br />{" "}
                <span className="color-red">
                  WITH STATS. TACTICS <br />
                  <br /> & ART{" "}
                </span>{" "}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroBanner;
