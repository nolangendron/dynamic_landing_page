import React from "react";
import { connect } from "react-redux";
import { updateHeader } from "../../../reducers/selectedSection";
import { InitState, HeaderProps } from "../../../types/types";
const styles = require("./Header02.css");

const Header02 = (props: HeaderProps) => {
  const { updateHeader } = props;
  const handleClick = (event: any) => {
    const id = event.currentTarget.id;
    updateHeader(id);
  };
  return (
    <nav
      id="header02"
      className={`${styles.header} purple lighten-4`}
      onClick={event => {
        handleClick(event);
      }}
    >
      <div className="nav-wrapper">
        <a className="brand-logo right">Logo</a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <a>Sass</a>
          </li>
          <li>
            <a>Components</a>
          </li>
          <li>
            <a>JavaScript</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = (state: InitState) => state;
const mapDispatchToProps = { updateHeader };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header02);
