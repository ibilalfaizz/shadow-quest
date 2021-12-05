import { Accordion, Col, Row } from "react-bootstrap";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="section footer wf-section">
      <div className="container">
        <Row>
          <Col md="2">
            <p className="text-extra-small align-left text-white-opacity mb-5">
              Shadow Quest. All Rights Reserved.{" "}
            </p>
          </Col>
          <Col md="7">
            <Link href="/">
              <span className="footer-link "> SHADOWQUEST </span>
            </Link>
            <a href="#stake-to-earn" className="footer-link w--current">
              STAKE TO EARN
              <br />
            </a>
            <a href="#nations" className="footer-link">
              NATIONS
              <br />
            </a>
            <a href="#roadmap" className="footer-link">
              GAME ROADMAP
              <br />
            </a>
            <Link href="/lore">
              <span className="footer-link "> LORE </span>
            </Link>
            <Link href="/whitepaper">
              <span className="footer-link "> WHITEPAPERS </span>
            </Link>
          </Col>
          <Col md="2">
            {" "}
            <div className="subscribe-socials community justify-content-end">
              <a
                href="https://twitter.com/ZenCho_NFT"
                target="_blank"
                rel="noOpener"
                className="footer-social community w-inline-block"
              >
                <img
                  src="/assets/images/twitter.png"
                  width={30}
                  alt=""
                  className="image-9"
                />
              </a>

              <a
                href="https://discord.gg/kZquzB6Aes"
                target="_blank"
                rel="noOpener"
                className="footer-social community w-inline-block"
              >
                <img
                  src="/assets/images/discord.png"
                  width={30}
                  alt=""
                  className="image-10"
                />
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Footer;
