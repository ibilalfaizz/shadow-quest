import { Col, Nav, Row, Tab } from "react-bootstrap";
import NavItem from "./NavItem";
import NavContent from "./NavContent";
const Nations = () => {
  return (
    <div
      id="basics"
      className="section-33 wf-section "
      style={{ background: "#151515" }}
    >
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
        <div className="center-block mb-60 ">
          <h2 className="text-white">Warring &nbsp;Nations</h2>
          <h3 className="hero-text mb-20">国家</h3>
          <p className="text-white text-small">
            Tensions build as nations struggle for supremacy in a world where
            the old and new collide. The soothsayers warn a Dark Army is
            approaching, whilst the scientists advance unhindered by such things
            they refuse to comprehend.
            <br />
            <br />
            What strategy will you employ to be prepared for the legendary
            battle and claim the prizes that await?
            <br />
            Do you hone your Warrior’s skills safely in the Training ground, or
            risk more in the Battlefield?
            <br />
            Where do you belong, and who will you fight for?
            <br />
            <br />
            Only you can decide.
          </p>
        </div>
        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey="first"
          className="strategy-basics-tabs w-tabs"
        >
          <Row className="bg-red">
            <Col md={5}>
              <Nav variant="pills" className="flex-column">
                <NavItem eventKey="first" count="1" title="Kiroh" />
                <NavItem eventKey="second" count="2" title="Midsurin" />
                <NavItem eventKey="third" count="3" title="Yama" />
                <NavItem eventKey="fourth" count="4" title="Engan" />
                <NavItem eventKey="fifth" count="5" title="Shiryo" />
                <NavItem eventKey="sixth" count="6" title="Samsar" />
              </Nav>
            </Col>
            <Col md={7}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <NavContent supply="250" image="Kiroh.jpeg" />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <NavContent supply="280" image="Midsurin.jpeg" />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <NavContent supply="180" image="Yama.jpeg" />
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <NavContent supply="180" image="Engan.jpeg" />
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <NavContent supply="180" image="shiryo.png" />
                </Tab.Pane>
                <Tab.Pane eventKey="sixth">
                  <NavContent supply="180" image="DarkSamsar.jpg" />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
};
export default Nations;
