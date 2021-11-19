import { Accordion } from "react-bootstrap";

const AccordionItem = () => {
  return (
    <div>
      <Accordion
        defaultActiveKey="0"
        className="c-faq-item-2"
        flush
        style={{ background: "#19181D" }}
      >
        <Accordion.Item
          eventKey="0"
          className="p-0 text-white mt-2"
          style={{ backgroundColor: "rgb(32, 33, 37)" }}
        >
          <Accordion.Header className="text-white">
            WHAT IS THE SMART CONTRACT ADDRESS?
          </Accordion.Header>
          <Accordion.Body>0x123456789sdsdsd</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item
          eventKey="2"
          className="p-0 text-white mt-2"
          style={{ backgroundColor: "rgb(32, 33, 37)" }}
        >
          <Accordion.Header>HOW DO I BUY A Zenchō NFT?</Accordion.Header>
          <Accordion.Body>
            The official link to our Open Sea account is:
            https://opensea.io/collection/
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item
          eventKey="3"
          className="p-0 text-white mt-2"
          style={{ backgroundColor: "rgb(32, 33, 37)" }}
        >
          <Accordion.Header>WHAT DETERMINES DA'S RARITY?</Accordion.Header>
          <Accordion.Body>
            The official link to our Open Sea account is:
            https://opensea.io/collection/
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item
          eventKey="4"
          className="p-0 text-white mt-2"
          style={{ backgroundColor: "rgb(32, 33, 37)" }}
        >
          <Accordion.Header>WHAT DETERMINES DA'S RARITY?</Accordion.Header>
          <Accordion.Body>
            Most rarity scores take direct input from open sea, and simply
            employ a statistical rarity model (insert baseline calculation),
            however, our own model was worked on directly with the RarityMon
            team to ensure we had the proper balance of statistical rarity, but
            also a weight on unique attributes and variance of features.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item
          eventKey="5"
          className="p-0 text-white mt-2"
          style={{ backgroundColor: "rgb(32, 33, 37)" }}
        >
          <Accordion.Header>HOW MANY MINTABLE NFTS ARE THERE?</Accordion.Header>
          <Accordion.Body>
            There will be 10,011 mintable NFTs available as ERC-721 tokens on
            the Ethereum blockchain.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
export default AccordionItem;
