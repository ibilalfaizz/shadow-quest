const RoadMapSection = () => {
  const roadMapData = [
    {
      title: ` 10K Gen0 Warrior NFTs are minted`,
      description: [
        `Every Warrior is unique hand-drawn limited edition art`,
        `Each Warrior can be strategically staked in a choice of TWO battle locations to earn precious $HONR.`,
        `Warriors with the most FIGHTs won against the Dark Samsar Army will receive glorious $HONR prizes EACH WEEK`,
      ],
    },
    {
      title: `TWO NEW BATTLE LOCATIONS ARE ADDED!
      `,
      description: [
        `Interstice - Warriors who dare, can travel to the Samsar homeland that borders on the astral planes. Here the rewards are legendary but the Samsar are even more deadly so beware of your $HONR! `,
        `Eclipse - Little is known of this event, but whispers warn it is where heroes are born and broken. Are you brave enough to venture into this unknown space? Will you go down in the annals of history as the greatest warrior? Will you return a god? Will you return at all?`,
      ],
    },
    {
      title: `BOOST YOUR STATS WITH WEAPONS AND ARMOR! `,
      description: [
        `Warriors will be able to commission unique weapons and armor from master blacksmiths from around the world.`,
        `The weapons and armor will be paid for using $HONR, and will boost the stats of your Warriors to increase your winnings in battle!`,
      ],
    },
    {
      title: `PVP BATTLE MECHANICS UPGRADE`,
      description: [
        `The mechanics will be upgraded so that you will be able to battle other warriors head to head and see the damage done with each attack.`,
        `There will be $HONR rewards for winning PvP battles. And for those who lose PvP battles, the tough lessons learnt in the battlefield will result in stats boosts so you can come back stronger next time! `,
        `If you receive any stats boosts, then YOU will be able to choose whether you improve your Skill, Speed, Strength, Magic, or Health!`,
      ],
    },
    {
      title: `ONLY NUMBER 2 MAY CHALLENGE NUMBER 1`,
      description: [
        `Inspired by an epic creation, we’ll introduce systems where whoever is Number 1 on the Leaderboard may ONLY be challenged by Number 2. `,
        `But these mythical clashes are rare events and will not happen as often as normal battles. Competition will be fierce. Rewards will be magnificent. Only the greatest will rise. `,
      ],
    },
    {
      title: `TEAM BATTLES `,
      description: [
        `We’ll introduce the ability to team up with another Warrior to do battle.`,
        `This will boost your stats and enable you to win more battles, earn more $HONR, and rise up the ranks!`,
        `But you’ll have to be strategic with who you team up with as certain pairings may not be the most advantageous!`,
      ],
    },
    {
      title: `COMMUNITY SUGGESTIONS `,
      description: [
        `We have huge plans, and epic dreams, but ultimately we’re guided by the community.
      `,
        `Join the Discord to give us suggestions on what you want us to focus in, and what else we should build into this world we’re creating together.
      `,
        ` Who knows where this will take us!

      `,
      ],
    },
  ];
  return (
    <div id="roadmap" className="section-33 black pt-0 wf-section">
      <div
        data-w-id="93510166-6783-abb6-edcd-01402d178112"
        style={{
          opacity: 1,
          transform:
            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          transformStyle: "preserve-3d",
        }}
        className="container"
      >
        <div className="div-block-19-copy-copy">
          <a
            className="custom-button primary w-inline-block"
            style={{ backgroundColor: "#8bffff", color: "black" }}
          >
            <div className="custom-button-hover white" />
            <div
              className="corner-black top-left small black"
              style={{ backgroundColor: "#600000" }}
            />
            <div
              className="corner-black bottom-right small black"
              style={{ backgroundColor: "#600000" }}
            />
            <div className="custom-button-text-3">GAME &nbsp;ROADMAP</div>
          </a>
        </div>

        <div>
          {roadMapData.map((el, i) => {
            return (
              <div className="div-block-26 margin-top" key={i}>
                <div className="div-block-27">
                  <div className="centre_icon_wrap-2">
                    <div className="centre_step-2">0{++i}</div>
                  </div>
                  <div className="completed-bar-6" />
                </div>
                <div className="roadmap-info">
                  <h6 className="text-white"> {el.title}</h6>

                  <div className="indent-2">
                    <p className="text-white-opacity-2 mb-40 task-text margin-bottom">
                      <ul>
                        {el.description.map((subEl, i) => {
                          return <li key={i}>{subEl}</li>;
                        })}
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="justify-content-center mt-5"
          style={{ justifyContent: "center", display: "flex" }}
        >
          <a
            href="https://discord.gg/kZquzB6Aes"
            target="_blank"
            rel="noOpener"
            className="custom-button primary w-inline-block"
            style={{
              color: "white",
              backgroundColor: "black",
            }}
          >
            <div
              className="corner-black top-left small black"
              style={{ backgroundColor: "#600000" }}
            />
            <div
              className="corner-black bottom-right small black"
              style={{ backgroundColor: "#600000" }}
            />
            <div className="custom-button-text-3">FIGHT ON DISCORD</div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default RoadMapSection;
