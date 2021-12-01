const HeroBanner = () => {
  return (
    <div className="hero-2 withbg wf-section ">
      <div className="container">
        <div className="div-block-6 reversed">
          <div className="left-hero-2">
            <h1 className="">
              BEWARE&nbsp;THE&nbsp;OMEN
              <span />
            </h1>
            <h3 className="mt-0 mb-10-3 color-red">オーメンに注意</h3>
            <img
              src="/assets/images/divider.svg"
              alt=""
              className="mb-20 red"
            />

            <p className="text-black-opacity mb-40 none-margin">
              FIGHT FOR $HONR <br />
              Join the first NFT that combines hand-drawn limited edition art
              and community lore with P2E Defi gaming!
              <br />
              Fight to earn precious $HONR and win weekly spoils of war!
              <br />
              Will you safely stake your warriors in the Training Grounds or
              fight for glorious rewards in the Battlefield?
            </p>

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
            </div>
          </div>
          <div className="right-hero">
            <img
              src="/assets/images/hero.png"
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
