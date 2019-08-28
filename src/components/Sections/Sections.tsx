import React from "react";
import { connect } from "react-redux";
import { Header } from "../Headers/Header/Header";
import { Hero } from "../Heroes/Hero/Hero";
import { Footer } from "../Footers/Footer/Footer";
import { InitState } from "../../types/types";
const styles = require("./Sections.css");

interface SelectionsProps {
  selectedSection: string;
  header: string;
  hero: string;
  footer: string;
}
const Sections = (props: SelectionsProps) => {
  const { selectedSection } = props;

  let section = (option: string) => {
    switch (option) {
      case "header":
        return (
          <div>
            <Header />
          </div>
        );
        break;
      case "hero":
        return (
          <div>
            <Hero />
          </div>
        );
        break;
      case "footer":
        return (
          <div>
            <Footer />
          </div>
        );
        break;
    }
  };
  return (
    <div className={`${styles.grid} ${styles.sectionContainer}`}>
      {section(selectedSection)}
    </div>
  );
};

const mapStateToProps = (state: InitState) => state;

export default connect(mapStateToProps)(Sections);
