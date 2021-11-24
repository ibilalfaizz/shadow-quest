import { Accordion } from "react-bootstrap";
import AccordionItem from "./AccordionItem";

const FaqSection = () => {
  return (
    <div>
      <div className="section-33 black pt-0 wf-section">
        <div id="FAQ" className="section-inner primary-bordered _2 mt-0">
          <div className="container p-0">
            <h3 className="text-white-5 ">
              FREQUENTLY&nbsp;ASKED&nbsp;<span>QUESTIONS</span>
            </h3>
            <img src="/assets/icons/divider.svg" alt="" className="mb-20 red" />

            <AccordionItem />
          </div>
        </div>
      </div>
    </div>
  );
};
export default FaqSection;
