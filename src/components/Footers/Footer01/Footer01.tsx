import React from "react";
import { connect } from "react-redux";
import { updateFooter } from "../../../reducers/selectedSection";
import { InitState, FooterProps } from "../../../types/types";
const styles = require("../Footer/Footer.css");

const Footer01 = (props: FooterProps) => {
  const { updateFooter } = props;
  const handleClick = (event: any) => {
    const id = event.currentTarget.id;
    updateFooter(id);
  };

  return (
    <footer
      className={`${styles.footer} page-footer pink lighten-4`}
      id="footer01"
      onClick={event => {
        handleClick(event);
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Footer Content</h5>
            <p className="grey-text text-lighten-4">
              You can use rows and columns here to organize your footer content.
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Link 1
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Link 2
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Link 3
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Link 4
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2014 Copyright Text
          <a className="grey-text text-lighten-4 right">More Links</a>
        </div>
      </div>
    </footer>
  );
};

const mapStateToProps = (state: InitState) => state;
const mapDispatchToProps = { updateFooter };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer01);
