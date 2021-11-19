import { Accordion } from "react-bootstrap";

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
          <div className="w-col w-col-9">
            <p className="text-extra-small align-left text-white-opacity mb-10">
              Zenchō. All Rights Reserved.{" "}
            </p>
          </div>
        </div>
        <div className="divider mb-40" />
        <div className="footer-links">
          <div className="footer-lonks-left">
            <a href="#" className="footer-logo w-inline-block">
              <img src="#" width={40} alt="" className="image-16" />
            </a>
            <a href="/" aria-current="page" className="footer-link w--current">
              HOME
            </a>
            <a href="#" className="footer-link w--current">
              ROADMAP
              <br />
            </a>
            <a href="#" className="footer-link">
              BLOODLINES
              <br />
            </a>
            <a href="#" className="footer-link">
              TEAM
            </a>
            <a href="#" target="_blank" className="footer-link hide">
              CONTRACT
            </a>
            <a href="#" className="footer-link">
              TERMS&nbsp;OF&nbsp;SERVICE
            </a>
          </div>
          <div className="subscribe-socials community">
            <a
              href="#"
              target="_blank"
              className="footer-social community w-inline-block"
            >
              <img
                src="/assets/images/opensea.png"
                width={29}
                alt=""
                className="image-9"
              />
            </a>
            <a
              href="#"
              target="_blank"
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
              href="#"
              target="_blank"
              className="footer-social community w-inline-block"
            >
              <img
                src="/assets/images/medium.png"
                width={30}
                alt=""
                className="image-9"
              />
            </a>
            <a
              href="#"
              target="_blank"
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
