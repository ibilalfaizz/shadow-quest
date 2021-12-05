import { Nav } from "react-bootstrap";

const NavItem = (props) => {
  return (
    <div className="strategy-basics-tabs-content w-tab-content">
      <div
        className="genesis _1 w-tab-pane w--tab-active"
        id="w-tabs-0-data-w-pane-0"
      >
        <img src={`/assets/images/nations/${props.image}`} />
        <div className="corner-dark bottom-right dark" />
      </div>
    </div>
  );
};
export default NavItem;
