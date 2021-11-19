const HeroBanner = () => {
  return (
    <div className="hero-2 withbg wf-section">
      <div className="container">
        <div className="div-block-6 reversed">
          <div className="left-hero-2">
            <h1 className="mb-10-3">
              JUDGEMENT&nbsp;IS&nbsp;HERE
              <span />
            </h1>
            <img
              src="/assets/images/divider.svg"
              alt=""
              className="mb-20 red"
            />

            <p className="text-black-opacity mb-40 none-margin">
              Zencho is the first attempt at an in game governance NFT that will
              act as an experimental catalyst for open source tribe formation.
            </p>
            <a href="#" className="soldout w-inline-block">
              <h1 className="mb-10-3 sold-text">
                WASTELAND&nbsp;COLLECTION
                <span />
              </h1>
              <div className="corner-black bottom-right small" />
            </a>
            <div className="button-group mb-10 stretch">
              <a
                href="https://discord.com/invite/fgsF2dBRhW"
                className="custom-button primary w-inline-block"
              >
                <div className="custom-button-hover white" />
                <div className="corner-black top-left small _2" />
                <div className="corner-black bottom-right small" />
                <div className="custom-button-text-3 _2">DISCORD</div>
              </a>
              <a
                href="https://opensea.io/collection"
                className="custom-button primary secondary top w-inline-block"
              >
                <div className="custom-button-hover white" />
                <div className="corner-black top-left small" />
                <div className="corner-black bottom-right small" />
                <div className="custom-button-text-2-copy">OPENSEA</div>
              </a>
            </div>
          </div>
          <div className="right-hero">
            <img
              src="/assets/images/6154fe9d587fa600528b545a_horn.png"
              width={606}
              alt=""
              className="image-17"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroBanner;
