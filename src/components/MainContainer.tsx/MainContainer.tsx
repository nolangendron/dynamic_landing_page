import React from "react";
import { connect } from "react-redux";
import Header01 from "../Headers/Header01/Header01";
import Header02 from "../Headers/Header02/Header02";
import Header03 from "../Headers/Header03/Header03";
import Hero01 from "../Heroes/Hero01/Hero01";
import Hero02 from "../Heroes/Hero02/Hero02";
import Hero03 from "../Heroes/Hero03/Hero03";
import Footer01 from "../Footers/Footer01/Footer01";
import Footer02 from "../Footers/Footer02/Footer02";
import Footer03 from "../Footers/Footer03/Footer03";
import { InitState } from "../../types/types";
const styles = require("./MainContainer.css");

interface MainProps {
  selectedSection: string;
  header: string;
  hero: string;
  footer: string;
}

const MainContainer = (props: MainProps) => {
  const { header, hero, footer } = props;

  let headerSection = (option: string) => {
    switch (option) {
      case "header01":
        return (
          <div>
            <Header01 />
          </div>
        );
        break;
      case "header02":
        return (
          <div>
            <Header02 />
          </div>
        );
        break;
      case "header03":
        return (
          <div>
            <Header03 />
          </div>
        );
        break;
    }
  };

  let heroSection = (option: string) => {
    switch (option) {
      case "hero01":
        return (
          <div>
            <Hero01 />
          </div>
        );
        break;
      case "hero02":
        return (
          <div>
            <Hero02 />
          </div>
        );
        break;
      case "hero03":
        return (
          <div>
            <Hero03 />
          </div>
        );
        break;
    }
  };

  let footerSection = (option: string) => {
    switch (option) {
      case "footer01":
        return (
          <div>
            <Footer01 />
          </div>
        );
        break;
      case "footer02":
        return (
          <div>
            <Footer02 />
          </div>
        );
        break;
      case "footer03":
        return (
          <div>
            <Footer03 />
          </div>
        );
        break;
    }
  };
  return (
    <div className={styles.grid}>
      <div>{headerSection(header)}</div>
      <div>{heroSection(hero)}</div>
      <div className={styles.footer}>{footerSection(footer)}</div>
    </div>
  );
};

const mapStateToProps = (state: InitState) => state;

export default connect(mapStateToProps)(MainContainer);
