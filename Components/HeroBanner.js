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
              6 warring nations call on you, their elite warriors, as a
              legendary battle looms. Will you join the fray to hone your skills
              in the battlegrounds? Will you defeat your enemies and be rewarded
              with $OMEN? Or will you grow stronger with each lesson learned?
              Perhaps you’ll rise to the top and reap the spoils of war?
              Whatever you do, BEWARE THE OMEN
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
