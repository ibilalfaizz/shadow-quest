import { Nav } from "react-bootstrap";

const NavItem = (props) => {
  return (
    <Nav.Item className="">
      <Nav.Link
        eventKey={props.eventKey}
        className="strategy-basics-tabs-menu-item-2 w-inline-block w-tab-link"
        style={{ opacity: "1", backgroundColor: "#19181D" }}
      >
        <div className="strategy-basics-tabs-menu-item-header-2">
          <div className="strategy-basics-tabs-menu-item-number-2">
            {props.count}
          </div>
          <p className="mb-0-2">
            <strong className="bold-text-28">{props.title}</strong>
          </p>
        </div>
      </Nav.Link>
    </Nav.Item>
  );
};
export default NavItem;
