import { Col, Nav, Row, Tab } from "react-bootstrap";
import NavItem from "./NavItem";
import NavContent from "./NavContent";
const Heros = () => {
  return (
    <div id="basics" className="section-33 dark-copy wf-section">
      <div
        id="nations"
        style={{
          opacity: 1,
          transform:
            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          transformStyle: "preserve-3d",
        }}
        className="container"
      >
        <div className="center-block mb-60">
          <h3 className="hero-text mb-20">血統</h3>
          <h4 className="text-dark">Divine&nbsp;Bloodlines</h4>
          <p className="text-dark text-small">
            Check out the character guide below to discover the available
            faction choices and begin preparing for an epic battle for
            sovereignty, governance, and glory. Each bloodline character will
            either be a hero or a nemesis. Which side you ending up fighting for
            is completely up to you.
            <br />
          </p>
        </div>
        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey="first"
          className="strategy-basics-tabs w-tabs"
        >
          <Row>
            <Col md={5}>
              <Nav variant="pills" className="flex-column">
                <NavItem eventKey="first" count="1" title="first" />
                <NavItem eventKey="second" count="2" title="second" />
                <NavItem eventKey="third" count="3" title="third" />
                <NavItem eventKey="fourth" count="4" title="fourth" />
                <NavItem eventKey="fifth" count="5" title="fifth" />
                <NavItem eventKey="sixth" count="6" title="sixth" />
              </Nav>
            </Col>
            <Col md={7}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <NavContent supply="250" image="team1.jpeg" />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <NavContent supply="280" image="team2.jpeg" />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <NavContent supply="180" image="team3.jpeg" />
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <NavContent supply="180" image="team4.jpeg" />
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <NavContent supply="180" image="team5.jpeg" />
                </Tab.Pane>
                <Tab.Pane eventKey="sixth">
                  <NavContent supply="180" image="team6.jpeg" />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
};
export default Heros;
