import { useState } from "react";
import Link from "next/link";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const open = {
    height: "10828.3px",
    display: "block",
  };
  const close = {
    display: "none",
  };

  // style={{ display: "none", height: "10828.3px", display: "block" }}
  return (
    <>
      <div className="hero-2 withbg wf-section">
        <div data-collapse="medium" className="navbar-3 w-nav  mt-0">
          <div className="navbar-container">
            <div className="navbar-container-left">
              {/* <a
                href="#"
                className="navbar-brand company w-nav-brand "
                style={{ color: "white" }}
              >
                Zenchō | 前兆
              </a> */}
              <Link href="/">
                <span className="navbar-brand game w-nav-brand cursor">
                  <h1 className="heading cursor"> Zenchō&nbsp; | &nbsp;前兆</h1>
                </span>
              </Link>
              <nav
                role="navigation"
                className="nav-menu w-nav-menu"
                style={{ transform: "translateY(0px) translateX(0px)" }}
              >
                <Link href="/">
                  <span className="div-block-40 w-inline-block w--current cursor">
                    <h1 className="heading-10">HOME</h1>
                  </span>
                </Link>
                <a href="#nations" className="div-block-40 w-inline-block">
                  <h1 className="heading-10">NATIONS</h1>
                </a>
                <Link href="/archives">
                  <span className="div-block-40 w-inline-block cursor">
                    <h1 className="heading-10 ">ARCHIVES</h1>
                  </span>
                </Link>
                <Link href="/community-submissions">
                  <span className="div-block-40 w-inline-block cursor">
                    <h1 className="heading-10">COMMUNITY SUBMISSIONS</h1>
                  </span>
                </Link>
                <a href="#" className="div-block-40 w-inline-block">
                  <h1 className="heading-10">ROADMAP</h1>
                </a>

                <a href="#" className="div-block-40 w-inline-block">
                  <h1 className="heading-10">FAQ</h1>
                </a>

                <div className="navbar-container-right">
                  <a
                    href="#"
                    target="_blank"
                    className="custom-button white nav-button w-inline-block"
                  >
                    <div className="custom-button-hover primary" />
                    <div className="corner-black top-left small dark3" />
                    <div className="corner-black bottom-right small dark3" />
                    <div className="custom-button-text-3 white-hover">
                      CONTRACT
                    </div>
                  </a>
                </div>
              </nav>
              <div className="menu-button-container">
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="menu-button w-nav-button"
                  style={{ WebkitUserSelect: "text" }}
                  aria-label="menu"
                  role="button"
                  aria-controls="w-nav-overlay-0"
                  aria-haspopup="menu"
                  aria-expanded="false"
                >
                  <img
                    src="/assets/images/menuIcon.png"
                    loading="lazy"
                    width={20}
                    alt=""
                    className="menu-button-icon"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-nav-overlay "
            data-wf-ignore
            id="w-nav-overlay-0"
            style={isOpen ? open : close}
          >
            <nav
              role="navigation"
              className="nav-menu w-nav-menu"
              data-nav-menu-open
              style={
                isOpen
                  ? {
                      transform: "translateY(0px) translateX(0px)",
                      transition: "transform 400ms ease 0s",
                    }
                  : {}
              }
            >
              <Link href="/" aria-current="page">
                <span className="div-block-40 w-inline-block  w--current">
                  <h1 className="heading-10">HOME</h1>
                </span>
              </Link>
              <a href="#nations">
                <span className="div-block-40 w-inline-block">
                  <h1 className="heading-10">NATIONS</h1>
                </span>
              </a>
              <a href="#">
                <span className="div-block-40 w-inline-block">
                  <h1 className="heading-10">ARCHIVES</h1>
                </span>
              </a>
              <Link href="/community-submissions">
                <span className="div-block-40 w-inline-block">
                  <h1 className="heading-10">COMMUNITY SUBMISSIONS</h1>
                </span>
              </Link>
              <a href="#">
                <span className="div-block-40 w-inline-block">
                  <h1 className="heading-10">ROADMAP</h1>
                </span>
              </a>
              <a href="#">
                <span className="div-block-40 w-inline-block">
                  <h1 className="heading-10">FAQ</h1>
                </span>
              </a>

              <div className="navbar-container-right">
                <a
                  href="#"
                  target="_blank"
                  className="custom-button white nav-button w-inline-block"
                >
                  <div className="custom-button-hover primary" />
                  <div className="corner-black top-left small dark3" />
                  <div className="corner-black bottom-right small dark3" />
                  <div className="custom-button-text-3 white-hover">
                    CONTRACT
                  </div>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
