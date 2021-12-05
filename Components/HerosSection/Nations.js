import { Col, Nav, Row, Tab } from "react-bootstrap";
import NavItem from "./NavItem";
import NavContent from "./NavContent";
const Nations = () => {
  const nationsData = [
    {
      title: "Kiroh",
      desc: `Speed and decisiveness thrive in the vast plains and sprawling cities of Kiroh. Are you fast enough to lead the pack?`,
      image: "Kiroh.jpeg",
      key: "first",
    },
    {
      title: "Midsurin",
      desc: `None can summon the arcane powers as effectively as the Midsurins. Are you able to harness the chaotic forces flowing through you?`,
      image: "Midsurin.jpeg",
      key: "second",
    },
    {
      title: "Yama",
      desc: `Forged in fires and molten rivers, the Yamans are nigh on indestructible and fiercely loyal fighters. When you go to battle, are you stronger together?`,
      image: "Yama.jpeg",
      key: "third",
    },
    {
      title: "Engan",
      desc: `The Engans are free thinking, highly trained minds developing fantastical and terrifyingly destructive inventions. Do you have a talent for creation?`,
      image: "Engan.jpeg",
      key: "fourth",
    },
    {
      title: "SHIRYO",
      desc: `Feared by their fellow clans due to their thirst for brutality, they are known for their incredible strength and fighting talents. Will you fight to the bitter, bloody end?`,
      image: "shiryo.png",
      key: "fifth",
    },
    {
      title: "SAMSAR",
      desc: `Mysterious myths and legends of fearsome warriors that control unknown energies and command souls… What dark powers do you possess?`,
      image: "DarkSamsar.jpg",
      key: "sixth",
    },
  ];
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
                {nationsData.map((el, i) => {
                  return (
                    <NavItem
                      key={i}
                      eventKey={el.key}
                      count={++i}
                      title={el.title}
                      text={el.desc}
                    />
                  );
                })}
              </Nav>
            </Col>
            <Col md={7} className="pr-md-0">
              <Tab.Content>
                {nationsData.map((el, i) => {
                  return (
                    <Tab.Pane eventKey={el.key} key={i}>
                      <NavContent supply="250" image={el.image} />
                    </Tab.Pane>
                  );
                })}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
};
export default Nations;
