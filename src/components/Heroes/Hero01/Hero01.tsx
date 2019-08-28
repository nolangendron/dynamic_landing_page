import React from "react";
import { connect } from "react-redux";
import { updateHero } from "../../../reducers/selectedSection";
import { InitState, HeroProps } from "../../../types/types";
const styles = require("./Hero01.css");

const Hero01 = (props: HeroProps) => {
  const { updateHero } = props;
  const handleClick = (event: any) => {
    const id = event.currentTarget.id;
    updateHero(id);
  };
  return (
    <div
      id="hero01"
      onClick={event => {
        handleClick(event);
      }}
      className="container"
    >
      <div className="jumbotron" id="tagline">
        <h1>HEADER JUMBO</h1>
      </div>
      <div className="row">
        <div className="col m6">
          <h3>Main</h3>

          <div className="divider"></div>
          <p>
            Sriracha biodiesel taxidermy organic post-ironic, Intelligentsia
            salvia mustache 90's code editing brunch.
          </p>

          <button className="btn btn-flat blue waves-effect waves-light white-text">
            Click Me
          </button>
        </div>
        <div className="col m6">
          <h3>Main</h3>

          <div className="divider"></div>
          <p>
            Sriracha biodiesel taxidermy organic post-ironic, Intelligentsia
            salvia mustache 90's code editing brunch.
          </p>

          <button className="btn btn-flat blue waves-effect waves-light white-text">
            Click Me
          </button>
        </div>

        <div className="col l3"></div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: InitState) => state;
const mapDispatchToProps = { updateHero };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hero01);
