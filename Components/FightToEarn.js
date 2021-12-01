import Link from "next/link";

const HeroBanner = () => {
  return (
    <div className="  wf-section bg-grey fight-to-earn" id="stacking-game">
      <div className="container">
        <div className="row text-center">
          <div className="col-10">
            <div className="f2e-inner">
              <div>
                <h1 className="color-red">FIGHT TO EARN</h1>
                <h3 className="text-white">稼ぐために戦う</h3>
              </div>
              <div>
                <h3 className="color-red">10K Gen0 Warrior NFTs are minted</h3>
                <p>
                  a. Each unique NFT has 5 stats: Skill, Speed, Strength, Magic,
                  Health - better stats means better chance of winning in
                  battle. b.1K are Dark Samsar - a mysterious, ultra rare army
                  that can steal $HONR
                </p>
                <h3 className="color-red ">BATTLE your Warrior!</h3>
                <p>a. Stake your Warrior to earn precious $HONR in battle</p>
                <h3 className="color-red">Choose where to fight!</h3>

                <h3 className="color-red"> Choose where to battle!</h3>
                <p>
                  a. Training Ground: Safely earn 3,000 $HONR per day
                  <br />
                  b. Battlefield: Earn UP TO 1,000 $HONR per HOUR depending on
                  your stats and luck.
                </p>

                <h3 className="color-red"> Retreat to safety! [Unstaking]</h3>
                <p>
                  a.In the Training Ground: you can simply leave training and
                  unstake with no risk.
                  <br />
                  b.In the Battlefield: you must choose to FLEE or FIGHT from
                  the Dark Samsar Army!
                  <br />
                </p>

                <h3 className="color-red"> Valiant Fighters are honored!</h3>
                <p>
                  a. Soon after battle commences, stories of our greatest
                  fighters and largest $HONR winners will fill the kingdom
                  <br />
                  b. $HONR rewards and glorious rewards will be bestowed upon
                  those fighters who develop a reputation...
                  <br />
                </p>

                <h3 className="color-red"> $HONR Tokenomics</h3>
                <p>
                  a. Use $HONR to
                  <br />
                  i. Grow your battalion! <br />
                  ii. Upgrade your weapons and armour <br />
                  iii. future mint battleland - all revealed soon
                </p>
              </div>
              <div className="button-group mb-10 stretch mt-5">
                <Link href="/whitepaper" className="cursor-pointer">
                  <span className="custom-button primary w-inline-block">
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
                  </span>
                </Link>
              </div>
              <div className="button-group mb-10 stretch">
                <a
                  href="https://discord.gg/kZquzB6Aes"
                  target="_blank"
                  rel="noOpener"
                  className="custom-button primary w-inline-block"
                >
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
