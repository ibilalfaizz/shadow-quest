import { Nav, Accordion } from "react-bootstrap";
import Link from "next/link";
const NavItem = (props) => {
  return (
    <Accordion.Item
      eventKey={props.eventKey}
      className="p-0 text-white mt-2 p-0 m-0 nation-accordion"
      style={{ backgroundColor: "#460d0f", padding: "0px" }}
    >
      <Accordion.Header className="text-white w-100 p-0">
        <Nav.Link
          eventKey={props.eventKey}
          className="strategy-basics-tabs-menu-item-2 w-inline-block w-tab-link w-100"
        >
          <div className="strategy-basics-tabs-menu-item-header-2">
            <div
              className="strategy-basics-tabs-menu-item-number-2"
              style={{ color: "white" }}
            >
              {props.count}
            </div>
            <p className="mb-0-2">
              <strong className="bold-text-28" style={{ color: "white" }}>
                {props.title}
              </strong>
            </p>
          </div>
        </Nav.Link>
      </Accordion.Header>
      <Accordion.Body>
        {" "}
        <Link href={`/lore#${props.title}`}>
          <p className="text-transform-none font-14 text-underline cursor-pointer">
            {props.text}
          </p>
        </Link>
      </Accordion.Body>
    </Accordion.Item>
  );
};
export default NavItem;
