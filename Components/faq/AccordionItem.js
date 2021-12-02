import { Accordion } from "react-bootstrap";

const AccordionItem = () => {
  const data = [
    {
      title: `Minting Date`,
      description: [`Unconfirmed`],
    },
    {
      title: `Minting Price`,
      description: [`Unconfirmed`],
    },
    {
      title: `Number of Gen0 mints available`,
      description: [
        `9,996. 999 of these will be the powerful Dark Samsar warriors!`,
      ],
    },
    {
      title: `Number of Gen1 mints available`,
      description: [
        `18,000. 1,800 of these will be Dark Samsar reinforcements.`,
      ],
    },
    {
      title: `What do I earn by staking?`,
      description: [`$HONR`],
    },
    {
      title: `What can I use $HONR for?`,
      description: [`Minting Gen1 Warriors`],
    },
    {
      title: `Where can I buy and sell $HONR?`,
      description: [`https://app.uniswap.org/#/swap`],
    },
    {
      title: `How much Liquidity backing will the project provide for $HONR`,
      description: [`$300k`],
    },
    {
      title: `When can I start staking?`,
      description: [`Staking will be available immediately after minting!`],
    },
    {
      title: `What can I win from staking?`,
      description: [
        `On top of your regular staking rewards, if you have won the most fights that week, then you will be rewarded with an extra prize of 100k $HONR!`,
      ],
    },
    {
      title: `When will the first 100k $HONR prize be paid?`,
      description: [`1 week after minting`],
    },
    {
      title: `What determines a Warrior’s stats?`,
      description: [
        `Stats are split into 5 attributes each with their own use in battle. They are generated during minting and designed to be balanced but vary greatly from Warrior to Warrior. As a result each Warrior will have different strengths and weaknesses in battle.`,
      ],
    },
    {
      title: `What determines a Warrior’s rarity?`,
      description: [
        `Warriors not only have 5 attributes, but they are high quality generative art with detailed features with inspiration drawn from many classic manga comics.`,
      ],
    },
    {
      title: `How many Gen0 Warriors are there available to mint?`,
      description: [
        `There will be 9,996 Gen0 Warriors, of which 999 will be Dark Samsar warriors`,
        `There will be 18,000 Gen1 Warriors that are mintable. Of these, there will be 1,800 Dark Samsar warriors.`,
      ],
    },
    {
      title: `Can I really submit any type of writing as lore?`,
      description: [
        `Yes! We welcome all forms of writing as lore and will work to incorporate it into the over-arching storyline. This includes: short stories, flash fiction, snippets, poems, haikus, songs, limericks, riddles, and anything in between!`,
      ],
    },
    {
      title: `How can I submit lore to be showcased on the website?`,
      description: [
        `The best place is in the Discord server, specifically in the #fan-lore channel.`,
        `We will always have mods (and lots of the community) keeping an eye out for any new lore.`,
      ],
    },
    {
      title: `What plans do you have for the future?
            `,
      description: [
        `We are already working on plans to expand the game, and add new layers for strategic innovation. For example we’re looking to add:`,
        `Two extra battlegrounds with even higher risk/reward opportunities!`,
        `Additional weapons to boost your stats will be available to purchase using $HONR`,
        `Stats boosts for Warriors to help them win more battles and protect your precious $HONR`,
        `An innovative mechanic which will result in increased competition for the leaderboard top spot and the prizes up for grabs each week.`,
        `Exciting mechanics to team up with other Warriors to boost your stats and win more battles! (But you’ll have to be strategic with who you team up with as certain pairings may not be the most advantageous.) `,
      ],
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
        {data.map((el, i) => {
          return (
            <Accordion.Item
              eventKey={i}
              className="p-0 text-white mt-2"
              style={{ backgroundColor: "rgb(32, 33, 37)" }}
            >
              <Accordion.Header className="text-white">
                {el.title}
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  <ul>
                    {el.description.map((el, i) => {
                      return <li>{el}</li>;
                    })}
                  </ul>
                </p>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
};
export default AccordionItem;
