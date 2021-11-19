import { Container } from "react-bootstrap";

const TeamSection = () => {
  return (
    <>
      <div id="team" className="team-section-2 wf-section">
        <div
          data-w-id="fe609885-3724-9794-ad3a-f80dee80881e"
          style={{
            opacity: 1,
            transform:
              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
          className="container"
        >
          <div className="center-block mb-40 centered-team">
            <div className="text-highlight primary mb-10 big">
              DIVINE&nbsp;ANARCHY TEAM
            </div>
          </div>
          <div className="nft-team-container">
            <div className="div-block-17">
              <a href="#" className="assetbender w-inline-block">
                <div className="corner-white-copy bottom-right small" />
                <div className="corner-white-copy bottom-right small _32" />
                <div className="text-highlight primary mb-10 team">
                  Team&nbsp;1
                </div>
              </a>
            </div>
            <div className="grxxnt">
              <div className="corner-white-copy bottom-right small" />
              <div className="corner-white-copy bottom-right small _32" />
              <div className="text-highlight primary mb-10 team">
                {" "}
                Team&nbsp;2
              </div>
            </div>
            <div className="diversity">
              <div className="corner-white-copy bottom-right small" />
              <div className="corner-white-copy bottom-right small _32" />
              <div className="text-highlight primary mb-10 team">
                {" "}
                Team&nbsp;3
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TeamSection;
