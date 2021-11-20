import { useState } from "react";
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
              <a href="#" className="navbar-brand company w-nav-brand">
                <img src="/assets/images/logo.png" width={34} alt="" />
              </a>
              <a href="#" className="navbar-brand game w-nav-brand">
                <h1 className="heading">Zenchō&nbsp;</h1>
              </a>
              <nav
                role="navigation"
                className="nav-menu w-nav-menu"
                style={{ transform: "translateY(0px) translateX(0px)" }}
              >
                <div data-hover="true" data-delay={0} className="w-dropdown">
                  <div
                    className="dropdown-3 w-dropdown-toggle"
                    id="w-dropdown-toggle-0"
                    aria-controls="w-dropdown-list-0"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    role="button"
                    tabIndex={0}
                  >
                    <div className="icon-2 w-icon-dropdown-toggle" />
                    <div className="text-block-9">ABOUT</div>
                  </div>
                  <nav
                    className="w-dropdown-list"
                    id="w-dropdown-list-0"
                    aria-labelledby="w-dropdown-toggle-0"
                  >
                    <a
                      href="#"
                      className="dropdown-link-2 w-dropdown-link"
                      tabIndex={0}
                    >
                      STORY
                    </a>
                    <a
                      href="#"
                      className="dropdown-link-2 hidden w-dropdown-link"
                      tabIndex={0}
                    >
                      GAMEPLAY
                    </a>
                    <a
                      href="#"
                      className="dropdown-link-2 w-dropdown-link"
                      tabIndex={0}
                    >
                      ROADMAP
                    </a>
                    <a
                      href="#"
                      className="dropdown-link-copy-2 w-dropdown-link"
                      tabIndex={0}
                    >
                      GALLERY
                    </a>
                    <a
                      href="#"
                      className="dropdown-link-2 w-dropdown-link"
                      tabIndex={0}
                    >
                      TEAM
                    </a>
                  </nav>
                </div>
                <a
                  href="/"
                  aria-current="page"
                  className="div-block-40 w-inline-block w--current"
                >
                  <div
                    data-hover="false"
                    data-delay={0}
                    className="dropdown-2 w-dropdown"
                  >
                    <div
                      className="nav-link dropdown w-dropdown-toggle"
                      id="w-dropdown-toggle-1"
                      aria-controls="w-dropdown-list-1"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      role="button"
                      tabIndex={0}
                    >
                      <div className="text-block-4">HOME</div>
                    </div>
                    <nav
                      className="nav-dropdown-games-list w-dropdown-list"
                      id="w-dropdown-list-1"
                      aria-labelledby="w-dropdown-toggle-1"
                    />
                  </div>
                  <h1 className="heading-10">HOME</h1>
                </a>
                <a href="#" className="div-block-40 w-inline-block">
                  <div
                    data-hover="false"
                    data-delay={0}
                    className="dropdown-2 w-dropdown"
                  >
                    <div
                      className="nav-link dropdown w-dropdown-toggle"
                      id="w-dropdown-toggle-2"
                      aria-controls="w-dropdown-list-2"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      role="button"
                      tabIndex={0}
                    >
                      <div className="text-block-4">HOME</div>
                    </div>
                    <nav
                      className="nav-dropdown-games-list w-dropdown-list"
                      id="w-dropdown-list-2"
                      aria-labelledby="w-dropdown-toggle-2"
                    />
                  </div>
                  <h1 className="heading-10">RARITY</h1>
                </a>
                <a href="#" className="div-block-40 w-inline-block">
                  <div
                    data-hover="false"
                    data-delay={0}
                    className="dropdown-2 w-dropdown"
                  >
                    <div
                      className="nav-link dropdown w-dropdown-toggle"
                      id="w-dropdown-toggle-3"
                      aria-controls="w-dropdown-list-3"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      role="button"
                      tabIndex={0}
                    >
                      <div className="text-block-4">HOME</div>
                    </div>
                    <nav
                      className="nav-dropdown-games-list w-dropdown-list"
                      id="w-dropdown-list-3"
                      aria-labelledby="w-dropdown-toggle-3"
                    />
                  </div>
                  <h1 className="heading-10">WASTELAND</h1>
                </a>
                <a href="#" className="div-block-40 w-inline-block">
                  <div
                    data-hover="false"
                    data-delay={0}
                    className="dropdown-2 w-dropdown"
                  >
                    <div
                      className="nav-link dropdown w-dropdown-toggle"
                      id="w-dropdown-toggle-4"
                      aria-controls="w-dropdown-list-4"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      role="button"
                      tabIndex={0}
                    >
                      <div className="text-block-4">HOME</div>
                    </div>
                    <nav
                      className="nav-dropdown-games-list w-dropdown-list"
                      id="w-dropdown-list-4"
                      aria-labelledby="w-dropdown-toggle-4"
                    />
                  </div>
                  <h1 className="heading-10">ROADMAP</h1>
                </a>
                <a href="#" className="div-block-40 w-inline-block">
                  <div
                    data-hover="false"
                    data-delay={0}
                    className="dropdown-2 w-dropdown"
                  >
                    <div
                      className="nav-link dropdown w-dropdown-toggle"
                      id="w-dropdown-toggle-5"
                      aria-controls="w-dropdown-list-5"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      role="button"
                      tabIndex={0}
                    >
                      <div className="text-block-4">HOME</div>
                    </div>
                    <nav
                      className="nav-dropdown-games-list w-dropdown-list"
                      id="w-dropdown-list-5"
                      aria-labelledby="w-dropdown-toggle-5"
                    />
                  </div>
                  <h1 className="heading-10">BLOODLINES</h1>
                </a>
                <a
                  href="#"
                  className="div-block-40 hide-copy dev-road w-inline-block"
                >
                  <div
                    data-hover="false"
                    data-delay={0}
                    className="dropdown-2 w-dropdown"
                  >
                    <div
                      className="nav-link dropdown w-dropdown-toggle"
                      id="w-dropdown-toggle-6"
                      aria-controls="w-dropdown-list-6"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      role="button"
                      tabIndex={0}
                    >
                      <div className="text-block-4">HOME</div>
                    </div>
                    <nav
                      className="nav-dropdown-games-list w-dropdown-list"
                      id="w-dropdown-list-6"
                      aria-labelledby="w-dropdown-toggle-6"
                    />
                  </div>
                  <h1 className="heading-10">DEV&nbsp;ROADMAP</h1>
                </a>
                <a href="#" className="div-block-40 w-inline-block">
                  <div
                    data-hover="false"
                    data-delay={0}
                    className="dropdown-2 w-dropdown"
                  >
                    <div
                      className="nav-link dropdown w-dropdown-toggle"
                      id="w-dropdown-toggle-7"
                      aria-controls="w-dropdown-list-7"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      role="button"
                      tabIndex={0}
                    >
                      <div className="text-block-4">HOME</div>
                    </div>
                    <nav
                      className="nav-dropdown-games-list w-dropdown-list"
                      id="w-dropdown-list-7"
                      aria-labelledby="w-dropdown-toggle-7"
                    />
                  </div>
                  <h1 className="heading-10">GAME&nbsp;THEORY</h1>
                </a>
                <a href="#" className="div-block-40 w-inline-block">
                  <div
                    data-hover="false"
                    data-delay={0}
                    className="dropdown-2 w-dropdown"
                  >
                    <div
                      className="nav-link dropdown w-dropdown-toggle"
                      id="w-dropdown-toggle-8"
                      aria-controls="w-dropdown-list-8"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      role="button"
                      tabIndex={0}
                    >
                      <div className="text-block-4">HOME</div>
                    </div>
                    <nav
                      className="nav-dropdown-games-list w-dropdown-list"
                      id="w-dropdown-list-8"
                      aria-labelledby="w-dropdown-toggle-8"
                    />
                  </div>
                  <h1 className="heading-10">FAQ</h1>
                </a>
                <div className="storyu-2 hide">
                  <a href="#" className="link-2">
                    STORY
                  </a>
                  <div
                    data-hover="false"
                    data-delay={0}
                    className="dropdown-2 w-dropdown"
                  >
                    <div
                      className="nav-link dropdown w-dropdown-toggle"
                      id="w-dropdown-toggle-9"
                      aria-controls="w-dropdown-list-9"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      role="button"
                      tabIndex={0}
                    >
                      <div className="text-block-4">HOME</div>
                    </div>
                    <nav
                      className="nav-dropdown-games-list w-dropdown-list"
                      id="w-dropdown-list-9"
                      aria-labelledby="w-dropdown-toggle-9"
                    />
                  </div>
                </div>
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
                  tabIndex={0}
                  aria-controls="w-nav-overlay-0"
                  aria-haspopup="menu"
                  aria-expanded="false"
                >
                  <img
                    src="https://assets-global.website-files.com/613d194161d4532d0f9c9b3b/613d194161d453ef4a9c9d1e_icons8-squared-menu-100.png"
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
              <div
                data-hover="true"
                data-delay={0}
                className="w-dropdown w--nav-dropdown-open"
              >
                <div
                  className="dropdown-3 w-dropdown-toggle w--nav-dropdown-toggle-open"
                  id="w-dropdown-toggle-0"
                  aria-controls="w-dropdown-list-0"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  role="button"
                  tabIndex={0}
                >
                  <div className="icon-2 w-icon-dropdown-toggle" />
                  <div className="text-block-9">ABOUT</div>
                </div>
                <nav
                  className="w-dropdown-list w--nav-dropdown-list-open"
                  id="w-dropdown-list-0"
                  aria-labelledby="w-dropdown-toggle-0"
                >
                  <a
                    href="#"
                    className="dropdown-link-2 w-dropdown-link"
                    tabIndex={0}
                  >
                    STORY
                  </a>
                  <a
                    href="#"
                    className="dropdown-link-2 hidden w-dropdown-link"
                    tabIndex={0}
                  >
                    GAMEPLAY
                  </a>
                  <a
                    href="#"
                    className="dropdown-link-2 w-dropdown-link"
                    tabIndex={0}
                  >
                    ROADMAP
                  </a>
                  <a
                    href="#"
                    className="dropdown-link-copy-2 w-dropdown-link"
                    tabIndex={0}
                  >
                    GALLERY
                  </a>
                  <a
                    href="#"
                    className="dropdown-link-2 w-dropdown-link"
                    tabIndex={0}
                  >
                    TEAM
                  </a>
                </nav>
              </div>
              <a
                href="/"
                aria-current="page"
                className="div-block-40 w-inline-block w--current"
              >
                <div
                  data-hover="false"
                  data-delay={0}
                  className="dropdown-2 w-dropdown w--nav-dropdown-open"
                >
                  <div
                    className="nav-link dropdown w-dropdown-toggle w--nav-dropdown-toggle-open"
                    id="w-dropdown-toggle-1"
                    aria-controls="w-dropdown-list-1"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    role="button"
                    tabIndex={0}
                  >
                    <div className="text-block-4">HOME</div>
                  </div>
                  <nav
                    className="nav-dropdown-games-list w-dropdown-list w--nav-dropdown-list-open"
                    id="w-dropdown-list-1"
                    aria-labelledby="w-dropdown-toggle-1"
                  />
                </div>
                <h1 className="heading-10">HOME</h1>
              </a>
              <a href="" className="div-block-40 w-inline-block">
                <div
                  data-hover="false"
                  data-delay={0}
                  className="dropdown-2 w-dropdown w--nav-dropdown-open"
                >
                  <div
                    className="nav-link dropdown w-dropdown-toggle w--nav-dropdown-toggle-open"
                    id="w-dropdown-toggle-2"
                    aria-controls="w-dropdown-list-2"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    role="button"
                    tabIndex={0}
                  >
                    <div className="text-block-4">HOME</div>
                  </div>
                  <nav
                    className="nav-dropdown-games-list w-dropdown-list w--nav-dropdown-list-open"
                    id="w-dropdown-list-2"
                    aria-labelledby="w-dropdown-toggle-2"
                  />
                </div>
                <h1 className="heading-10">RARITY</h1>
              </a>
              <a href="#" className="div-block-40 w-inline-block">
                <div
                  data-hover="false"
                  data-delay={0}
                  className="dropdown-2 w-dropdown w--nav-dropdown-open"
                >
                  <div
                    className="nav-link dropdown w-dropdown-toggle w--nav-dropdown-toggle-open"
                    id="w-dropdown-toggle-3"
                    aria-controls="w-dropdown-list-3"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    role="button"
                    tabIndex={0}
                  >
                    <div className="text-block-4">HOME</div>
                  </div>
                  <nav
                    className="nav-dropdown-games-list w-dropdown-list w--nav-dropdown-list-open"
                    id="w-dropdown-list-3"
                    aria-labelledby="w-dropdown-toggle-3"
                  />
                </div>
                <h1 className="heading-10">WASTELAND</h1>
              </a>
              <a href="#" className="div-block-40 w-inline-block">
                <div
                  data-hover="false"
                  data-delay={0}
                  className="dropdown-2 w-dropdown w--nav-dropdown-open"
                >
                  <div
                    className="nav-link dropdown w-dropdown-toggle w--nav-dropdown-toggle-open"
                    id="w-dropdown-toggle-4"
                    aria-controls="w-dropdown-list-4"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    role="button"
                    tabIndex={0}
                  >
                    <div className="text-block-4">HOME</div>
                  </div>
                  <nav
                    className="nav-dropdown-games-list w-dropdown-list w--nav-dropdown-list-open"
                    id="w-dropdown-list-4"
                    aria-labelledby="w-dropdown-toggle-4"
                  />
                </div>
                <h1 className="heading-10">ROADMAP</h1>
              </a>
              <a href="#" className="div-block-40 w-inline-block">
                <div
                  data-hover="false"
                  data-delay={0}
                  className="dropdown-2 w-dropdown w--nav-dropdown-open"
                >
                  <div
                    className="nav-link dropdown w-dropdown-toggle w--nav-dropdown-toggle-open"
                    id="w-dropdown-toggle-5"
                    aria-controls="w-dropdown-list-5"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    role="button"
                    tabIndex={0}
                  >
                    <div className="text-block-4">HOME</div>
                  </div>
                  <nav
                    className="nav-dropdown-games-list w-dropdown-list w--nav-dropdown-list-open"
                    id="w-dropdown-list-5"
                    aria-labelledby="w-dropdown-toggle-5"
                  />
                </div>
                <h1 className="heading-10">BLOODLINES</h1>
              </a>
              <a
                href="#"
                className="div-block-40 hide-copy dev-road w-inline-block"
              >
                <div
                  data-hover="false"
                  data-delay={0}
                  className="dropdown-2 w-dropdown w--nav-dropdown-open"
                >
                  <div
                    className="nav-link dropdown w-dropdown-toggle w--nav-dropdown-toggle-open"
                    id="w-dropdown-toggle-6"
                    aria-controls="w-dropdown-list-6"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    role="button"
                    tabIndex={0}
                  >
                    <div className="text-block-4">HOME</div>
                  </div>
                  <nav
                    className="nav-dropdown-games-list w-dropdown-list w--nav-dropdown-list-open"
                    id="w-dropdown-list-6"
                    aria-labelledby="w-dropdown-toggle-6"
                  />
                </div>
                <h1 className="heading-10">DEV&nbsp;ROADMAP</h1>
              </a>
              <a href="#" className="div-block-40 w-inline-block">
                <div
                  data-hover="false"
                  data-delay={0}
                  className="dropdown-2 w-dropdown w--nav-dropdown-open"
                >
                  <div
                    className="nav-link dropdown w-dropdown-toggle w--nav-dropdown-toggle-open"
                    id="w-dropdown-toggle-7"
                    aria-controls="w-dropdown-list-7"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    role="button"
                    tabIndex={0}
                  >
                    <div className="text-block-4">HOME</div>
                  </div>
                  <nav
                    className="nav-dropdown-games-list w-dropdown-list w--nav-dropdown-list-open"
                    id="w-dropdown-list-7"
                    aria-labelledby="w-dropdown-toggle-7"
                  />
                </div>
                <h1 className="heading-10">GAME&nbsp;THEORY</h1>
              </a>
              <a href="#" className="div-block-40 w-inline-block">
                <div
                  data-hover="false"
                  data-delay={0}
                  className="dropdown-2 w-dropdown w--nav-dropdown-open"
                >
                  <div
                    className="nav-link dropdown w-dropdown-toggle w--nav-dropdown-toggle-open"
                    id="w-dropdown-toggle-8"
                    aria-controls="w-dropdown-list-8"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    role="button"
                    tabIndex={0}
                  >
                    <div className="text-block-4">HOME</div>
                  </div>
                  <nav
                    className="nav-dropdown-games-list w-dropdown-list w--nav-dropdown-list-open"
                    id="w-dropdown-list-8"
                    aria-labelledby="w-dropdown-toggle-8"
                  />
                </div>
                <h1 className="heading-10">FAQ</h1>
              </a>
              <div className="storyu-2 hide">
                <a href="#" className="link-2">
                  STORY
                </a>
                <div
                  data-hover="false"
                  data-delay={0}
                  className="dropdown-2 w-dropdown w--nav-dropdown-open"
                >
                  <div
                    className="nav-link dropdown w-dropdown-toggle w--nav-dropdown-toggle-open"
                    id="w-dropdown-toggle-9"
                    aria-controls="w-dropdown-list-9"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    role="button"
                    tabIndex={0}
                  >
                    <div className="text-block-4">HOME</div>
                  </div>
                  <nav
                    className="nav-dropdown-games-list w-dropdown-list w--nav-dropdown-list-open"
                    id="w-dropdown-list-9"
                    aria-labelledby="w-dropdown-toggle-9"
                  />
                </div>
              </div>
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
