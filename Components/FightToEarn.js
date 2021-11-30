const HeroBanner = () => {
  return (
    <div className="  wf-section bg-grey fight-to-earn">
      <div className="container">
        <div className="row text-center">
          <div className="col-10">
            <div className="f2e-inner">
              <div>
                <h1 className="color-red">FIGHT TO EARN</h1>
                <h3 className="text-white">稼ぐために戦う</h3>
              </div>
              <div>
                <h3 className="color-red">10k Gen0 Zenchō NFTs are minted</h3>
                <p>
                  10K Genc Zencho NFTs are minted Every Zencho is unique
                  hand-drawn limited edition art Each unique NFT has 4 stats:
                  Skill, Speed, Strength, Magic - better stats means better
                  chance of winning in battle 1K are Dark Samsaar - a
                  mysterious, ultra rare army that can steal $OMEN.
                </p>
                <h3 className="color-red ">FIGHT your Zencho!</h3>
                <p>Stake your Zencho to earn precious $OMEN in battle</p>
                <h3 className="color-red">Choose where to fight!</h3>
                <p>
                  Training Ground: Safely earn 2,000 $OMEN per day Battlefield:
                  Earn UP TO 1000 $OMEN per HOUR depending on your stats and
                  luck
                </p>
                <h3 className="color-red"> Retreat to safety! [Unstaking]</h3>
                <p>
                  If training you can simply leave training and unstake
                  whenever. If battling you must face the Dark Samsaar Army as
                  you leave: Drop 15% of your newly earned $OMEN as you flee
                  from them! Fight the mysterious Dark Army: risk losing 50% of
                  your newly earned $OMEN to DOUBLE your newly earned $OMEN as
                  you leave with enemy spoils.
                </p>
              </div>
              <div className="button-group mb-10 stretch mt-5">
                <a href="#" className="custom-button primary w-inline-block">
                  <div className="custom-button-hover white" />
                  <div
                    className="corner-black top-left small _2"
                    style={{ backgroundColor: "#c7c7c7 " }}
                  />
                  <div
                    className="corner-black bottom-right small"
                    style={{ backgroundColor: "#c7c7c7 " }}
                  />
                  <div className="custom-button-text-3 _2">WHITEPAPER</div>
                </a>
              </div>
              <div className="button-group mb-10 stretch">
                <a href="#" className="custom-button primary w-inline-block">
                  <div className="custom-button-hover white" />
                  <div
                    className="corner-black top-left small _2"
                    style={{ backgroundColor: "#c7c7c7 " }}
                  />
                  <div
                    className="corner-black bottom-right small"
                    style={{ backgroundColor: "#c7c7c7 " }}
                  />
                  <div className="custom-button-text-3 _2">
                    JOIN FIGHT IN DISCORD
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroBanner;
