import React from "react";
import { connect } from "react-redux";
import { updateCurrent } from "../../reducers/selectedSection";
import { InitState } from "../../types/types";
const styles = require("./SectionButtons.css");

interface SelectionListProps {
  updateCurrent: typeof updateCurrent;
  selectedSection: string;
  header: string;
  hero: string;
  footer: string;
}

const SectionsList = (props: SelectionListProps) => {
  const { selectedSection, updateCurrent } = props;

  const handleOptionChange = (changeEvent: any): void => {
    const val = changeEvent.target.value;
    updateCurrent(val);
  };

  return (
    <div className={`${styles.grid} ${styles.radioToolbar}`}>
      <ul>
        <li>
          <input
            type="radio"
            checked={selectedSection === "header"}
            onChange={handleOptionChange}
            id="1"
            name="header"
            value="header"
          />
          <label htmlFor="1">Header</label>
        </li>
        <li>
          <input
            type="radio"
            checked={selectedSection === "hero"}
            onChange={handleOptionChange}
            id="2"
            name="hero"
            value="hero"
          />
          <label htmlFor="2">Hero</label>
        </li>
        <li>
          <input
            type="radio"
            checked={selectedSection === "footer"}
            onChange={handleOptionChange}
            id="3"
            name="footer"
            value="footer"
          />
          <label htmlFor="3">Footer</label>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state: InitState) => state;

const mapDispatchToProps = { updateCurrent };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SectionsList);
