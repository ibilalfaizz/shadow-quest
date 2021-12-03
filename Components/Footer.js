import { Accordion } from "react-bootstrap";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="section footer wf-section">
      <div className="container">
        <div className="row mb-40 w-row">
          <div className="column-8 w-col w-col-3">
            <a href="#" className="w-inline-block">
              <img
                src="/assets/images/logo.png"
                width={200}
                alt=""
                className="mb-10-2 invert"
              />
            </a>
          </div>
          <div className="w-col w-col-1">
            <p className="text-extra-small align-left text-white-opacity mb-10">
              ShadowQuest. All Rights Reserved.{" "}
            </p>
          </div>
        </div>
        <div className="divider mb-40" />
        <div className="footer-links">
          <div className="footer-lonks-left">
            <a href="#" className="footer-logo w-inline-block">
              <img src="#" width={40} alt="" className="image-16" />
            </a>
            <Link
              href="/"
              aria-current="page"
              className="footer-link w--current"
            >
              SHADOWQUEST
            </Link>
            <a href="#stacking-game" className="footer-link w--current">
              STAKE TO EARN
              <br />
            </a>
            <a href="#nations" className="footer-link">
              NATIONS
              <br />
            </a>
            <Link href="/archive" className="footer-link">
              LORE
              <br />
            </Link>
            <Link href="/whitepaper" className="footer-link">
              WHITEPAPER
              <br />
            </Link>
          </div>
          <div className="subscribe-socials community">
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
        </div>
      </div>
    </div>
  );
};
export default Footer;
