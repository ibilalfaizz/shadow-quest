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
              <Link href="/">
                <span className="navbar-brand game w-nav-brand cursor">
                  <h1 className="heading site-title cursor">
                    {" "}
                    SHADOW QUEST&nbsp; | &nbsp;シャドウクエスト
                  </h1>
                </span>
              </Link>
              <nav
                role="navigation"
                className="nav-menu w-nav-menu"
                style={{ transform: "translateY(0px) translateX(0px)" }}
              >
                <Link href="#stake-to-earn">
                  <span className="div-block-40 w-inline-block cursor-pointer">
                    <h1 className="heading-10">STAKE TO EARN</h1>{" "}
                  </span>
                </Link>
                <Link href="/#nations">
                  <span className="div-block-40 w-inline-block cursor-pointer">
                    <h1 className="heading-10">NATIONS</h1>
                  </span>
                </Link>
                <Link href="/#roadmap">
                  <span className="div-block-40 w-inline-block cursor-pointer">
                    <h1 className="heading-10">GAME ROADMAP</h1>
                  </span>
                </Link>
                <Link href="/lore">
                  <span className="div-block-40 w-inline-block cursor-pointer">
                    <h1 className="heading-10 ">LORE</h1>
                  </span>
                </Link>
                <Link href="/whitepaper">
                  <span className="div-block-40 w-inline-block cursor-pointer">
                    <h1 className="heading-10">WHITEPAPER</h1>{" "}
                  </span>
                </Link>

                <a
                  href="https://twitter.com/ZenCho_NFT"
                  target="_blank"
                  rel="noOpener"
                  className="div-block-40 w-inline-block"
                >
                  <svg
                    className="navbar-icons"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    width="30px"
                    height="30px"
                  >
                    {" "}
                    <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z" />
                  </svg>
                </a>
                <a
                  href="https://discord.gg/kZquzB6Aes"
                  target="_blank"
                  rel="noOpener"
                  className="div-block-40 w-inline-block"
                >
                  <svg
                    className="navbar-icons"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="30px"
                    height="30px"
                  >
                    <path d="M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z" />
                  </svg>
                </a>
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
              <Link href="#stake-to-earn">
                <span className="div-block-40 w-inline-block">
                  <h1 className="heading-10">STAKE TO EARN</h1>
                </span>
              </Link>
              <Link href="/#nations">
                <span className="div-block-40 w-inline-block">
                  <h1 className="heading-10">NATIONS</h1>
                </span>
              </Link>
              <Link href="/#roadmap">
                <span className="div-block-40 w-inline-block">
                  <h1 className="heading-10">GAME ROADMAP</h1>
                </span>
              </Link>
              <Link href="/lore">
                <span className="div-block-40 w-inline-block cursor">
                  <h1 className="heading-10 ">LORE</h1>
                </span>
              </Link>

              <Link href="/whitepaper">
                <span className="div-block-40 w-inline-block cursor-pointer">
                  <h1 className="heading-10">WHITEPAPER</h1>{" "}
                </span>
              </Link>

              <div className="navbar-container-right">
                <a
                  href="https://twitter.com/ZenCho_NFT"
                  target="_blank"
                  rel="noOpener"
                  className="div-block-40 w-inline-block"
                >
                  <svg
                    className="navbar-icons"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    width="30px"
                    height="30px"
                  >
                    {" "}
                    <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z" />
                  </svg>
                </a>

                <a
                  href="https://discord.gg/kZquzB6Aes"
                  target="_blank"
                  rel="noOpener"
                  className="div-block-40 w-inline-block"
                >
                  <svg
                    className="navbar-icons"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="30px"
                    height="30px"
                  >
                    <path d="M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z" />
                  </svg>
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
