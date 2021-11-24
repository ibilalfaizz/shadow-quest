const HeroBanner = () => {
  return (
    <div className="hero-2 withbg wf-section ">
      <div className="container">
        <div className="div-block-6 reversed">
          <div className="left-hero-2">
            <h1 className="mb-10-3">
              BEWARE&nbsp;THE&nbsp;OMEN
              <span />
            </h1>
            <img
              src="/assets/images/divider.svg"
              alt=""
              className="mb-20 red"
            />

            <p className="text-black-opacity mb-40 none-margin">
              Zencho is an ambitious experimental project for writers (and
              readers/poets/lyricists/wordsmiths/anyone with some beautiful
              words) that aims to do two things:
            </p>
            <p>
              1. Encourage, support, and empower writers of all backgrounds,
              skills, and talents by providing a welcoming platform to showcase
              and celebrate their work.
            </p>
            <p>
              2. Create an open ended community driven over-arching storyline
              where members decide what their NFT-characters do in scenarios
              that are presented as part of the storyline thus far.
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
