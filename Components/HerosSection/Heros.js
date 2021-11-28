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
          <h3 className="hero-text mb-20">国家</h3>
          <h4 className="text-dark">Warring &nbsp;Nations</h4>
          <p className="text-dark text-small">
            Tensions build as five dominant nations struggle for supremacy in a
            world where the old and new collide. What training strategy will you
            employ to be fully prepared for the legendary battle and claim the
            prizes that await? Do you hone your skills steadily, or push to risk
            more? Would you risk it all for eternal glory? Do you place skill
            over strength, or prefer to strike first before the chaotic powers
            can be summoned? Where do you belong, and who will you fight for?
            Only you can decide.
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
                <NavItem eventKey="first" count="1" title="Kiroh " />
                <NavItem eventKey="second" count="2" title="Midsurin " />
                <NavItem eventKey="third" count="3" title="Akaizan " />
                <NavItem eventKey="fourth" count="4" title="Engano" />
                <NavItem eventKey="fifth" count="5" title="Shiryo " />
                <NavItem eventKey="sixth" count="6" title="sixth" />
              </Nav>
            </Col>
            <Col md={7}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <NavContent supply="250" image="team3.jpeg" />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <NavContent supply="280" image="team5.jpeg" />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <NavContent supply="180" image="team4.jpeg" />
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <NavContent supply="180" image="team1.jpeg" />
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <NavContent supply="180" image="team2.jpeg" />
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
