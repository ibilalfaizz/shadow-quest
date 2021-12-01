import { Accordion } from "react-bootstrap";

const AccordionItem = () => {
  const data = [
    {
      title: `What determines a Warrior’s stats?`,
      description: `• Stats are split into 5 attributes each with their own use in battle. They are generated during minting and designed to be balanced but vary greatly from Warrior to Warrior. As a result each Warrior will have different strengths and weaknesses in battle.
        `,
    },
    {
      title: `What determines a Warrior’s rarity?`,
      description: `• Warriors not only have 5 attributes, but they are high quality generative art with detailed features with inspiration drawn from many classic manga comics.
        `,
    },
    {
      title: `How many Gen0 Warriors are there available to mint?`,
      description: `•There will be 9,996 Gen0 Warriors, of which 999 will be Dark Samsar warriors
            </br>
             • There will be 18,000 Gen1 Warriors that are mintable. Of these, there will be 1,800 Dark Samsar warriors.
             </br>`,
    },
    {
      title: `Can I really submit any type of writing as lore?`,
      description: `• Yes! We welcome all forms of writing as lore and will work to incorporate it into the over-arching storyline. This includes: short stories, flash fiction, snippets, poems, haikus, songs, limericks, riddles, and anything in between!
            </br>`,
    },
    {
      title: `How can I submit lore to be showcased on the website?`,
      description: `• The best place is in the Discord server, specifically in the #fan-lore channel. 
            </br>
            • We will always have mods (and lots of the community) keeping an eye out for any new lore.
            </br>`,
    },
    {
      title: `What plans do you have for the future?
            `,
      description: `• We are already working on plans to expand the game, and add new layers for strategic innovation. For example we’re looking to add:</br>
            • Two extra battlegrounds with even higher risk/reward opportunities!
            </br>
            • Additional weapons to boost your stats will be available to purchase using $HONR</br>
            • Stats boosts for Warriors to help them win more battles and protect your precious $HONR</br>
            • An innovative mechanic which will result in increased competition for the leaderboard top spot and the prizes up for grabs each week.</br>
            • Exciting mechanics to team up with other Warriors to boost your stats and win more battles! (But you’ll have to be strategic with who you team up with as certain pairings may not be the most advantageous!)
            </br>`,
    },
  ];
  return (
    <div>
      <Accordion
        defaultActiveKey="0"
        className="c-faq-item-2"
        flush
        style={{ background: "#19181D" }}
      >
        {/* 1 */}
        <Accordion.Item
          eventKey="0"
          className="p-0 text-white mt-2"
          style={{ backgroundColor: "rgb(32, 33, 37)" }}
        >
          <Accordion.Header className="text-white">
            What is the smart contract address?
          </Accordion.Header>
          <Accordion.Body>
            <p>TBA</p>
          </Accordion.Body>
        </Accordion.Item>

        {/* 1 */}
        <Accordion.Item
          eventKey="01"
          className="p-0 text-white mt-2"
          style={{ backgroundColor: "rgb(32, 33, 37)" }}
        >
          <Accordion.Header className="text-white">
            How do I mint a Zencho Gen0 NFT?
          </Accordion.Header>
          <Accordion.Body>
            <div className="indent-2">
              <p className="text-white-opacity-2 mb-40 task-text margin-bottom small2">
                • Connect your metamask <br />
                • Select the option to link your metamask to IMX
                <br />
                • Ensure you have enough eth in your account
                <br />
                • Select how many Zenchos you want to mint (5 max)
                <br />
                • Click mint!
                <br />
              </p>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        {/* 2 */}
        <Accordion.Item
          eventKey="2"
          className="p-0 text-white mt-2"
          style={{ backgroundColor: "rgb(32, 33, 37)" }}
        >
          <Accordion.Header>Why have you chosen IMX?</Accordion.Header>
          <Accordion.Body>
            <div className="indent-2">
              <p>The three main reasons are</p>
              <p className="text-white-opacity-2 mb-40 task-text margin-bottom small2">
                • IMX is gasless which means no hidden costs for you and we can
                really push the boundaries of what is possible on the chain!{" "}
                <br />
                • IMX is a layer 2 to ethereum so we can still use much of the
                functionality like eth payments, simple metamask integration,
                and ...
                <br />• IMX is carbon neutral, which means that we are not
                damaging the environment as we enjoy and grow this innovation!
              </p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        {/* '3' */}
        <Accordion.Item
          eventKey="3"
          className="p-0 text-white mt-2"
          style={{ backgroundColor: "rgb(32, 33, 37)" }}
        >
          <Accordion.Header>What determines a Zencho’s stats?</Accordion.Header>
          <Accordion.Body>
            <div className="indent-2">
              <p className="text-white-opacity-2 mb-40 task-text margin-bottom small2">
                • Stats are split into 5 attributes each with their own use in
                battle. They are generated during minting and designed to be
                balanced but vary greatly from Zencho to Zencho. As a result
                each Zencho will have different strengths and weaknesses in
                battle - you will have to learn your warrior and adapt
                accordingly.
              </p>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        {/* 4 */}
        <Accordion.Item
          eventKey="4"
          className="p-0 text-white mt-2"
          style={{ backgroundColor: "rgb(32, 33, 37)" }}
        >
          <Accordion.Header>
            What determines a Zencho’s rarity?
          </Accordion.Header>
          <Accordion.Body>
            <div className="indent-2">
              <p className="text-white-opacity-2 mb-40 task-text margin-bottom small2">
                • Zenchos not only have 5 attributes, but they are high quality
                generative art with detailed features with inspiration drawn
                from many classic manga comics. How many Gen0 Zenchos are there
                available to mint?
                <br />
                • There will be 6 armies, each consisting of 1,666 elite
                warriors; in total there will be 9,996 Gen0 Zenchos.
                <br />
              </p>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        {/* 6 */}
        <Accordion.Item
          eventKey="6"
          className="p-0 text-white mt-2"
          style={{ backgroundColor: "rgb(32, 33, 37)" }}
        >
          <Accordion.Header>
            Can I really submit any type of writing as lore?
          </Accordion.Header>
          <Accordion.Body>
            <div className="indent-2">
              <p className="text-white-opacity-2 mb-40 task-text margin-bottom small2">
                • Yes! We welcome all forms of writing as lore and will work to
                incorporate it into the over-arching storyline. This includes:
                short stories, flash fiction, snippets, poems, haikus, songs,
                limericks, riddles, and anything in between! How can I submit
                lore to be showcased?
                <br />
                • The best place is in the Discord server, specifically in the
                #fan-lore channel.
                <br />• We will always have mods (and lots of the community)
                keeping an eye out for any new lore
              </p>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        {/* 8 */}
        <Accordion.Item
          eventKey="8"
          className="p-0 text-white mt-2"
          style={{ backgroundColor: "rgb(32, 33, 37)" }}
        >
          <Accordion.Header>
            What plans do you have for the future?
          </Accordion.Header>
          <Accordion.Body>
            <div className="indent-2">
              <p className="text-white-opacity-2 mb-40 task-text margin-bottom small2">
                • We are already working on plans to expand the game, and add
                new layers for strategic innovation. For example:
                <br />
                • Two extra battle grounds are going to be added with even
                higher risk/reward chances!
                <br />• We are looking to implement an innovative mechanic will
                result increased competition for the leaderboard top spot and
                the prizes that are up for grabs each week.
                <br />• Additional weapons to boost your stats will be available
                to purchase using $OMEN
                <br />• And finally, we’re working on mechanics to team up with
                other Zenchos to boost your stats and win more battles! (But
                you’ll have to be strategic who you team up with as certain
                pairings may not be the most advantageous!)
              </p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
export default AccordionItem;
