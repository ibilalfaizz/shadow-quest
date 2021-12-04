const HeroBanner = () => {
  return (
    <div className=" wf-section banner-video ">
      <video
        playsInline
        autoPlay
        muted
        loop
        id="myVideo"
        poster="/assets/videos/banner-bg-fallback.png"
      >
        <source
          src="/assets/videos/Banner_BG_HighQuality.mp4"
          type="video/mp4"
        />
      </video>
      <div className="video-inner-container">
        <div className="container ">
          <img
            src="/assets/images/shadow-quest.png"
            style={{ margin: "auto" }}
          />
          <div className="row mt-5">
            <div className="col-md-6  d-flex justify-content-start">
              <div className="subtitles">
                <h5>
                  5 ARMIES <br />
                  <br /> 1 MYSTERIOUS ENEMY <br />
                  <br /> 10K WARRIORS <br />
                  <br /> 5 BILLION <span className="dollar-sign">
                    $
                  </span>HONR <br />
                  <br /> TO BE WON <br />
                  <br />
                </h5>
              </div>
            </div>
            {/* <div className="col-md-4 d-sm-none"></div> */}
            <div className="col-md-6  d-flex justify-content-end">
              <div className="subtitles">
                <h5>
                  A NEW STYLE <br />
                  <br /> OF <br />
                  <br /> STAKING GAME <br />
                  <br /> WITH STATS, TACTICS, <br />
                  <br /> & ART <br />
                  <br />{" "}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroBanner;
