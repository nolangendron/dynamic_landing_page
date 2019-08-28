import React from "react";
import Header01 from "../Header01/Header01";
import Header02 from "../Header02/Header02";
import Header03 from "../Header03/Header03";
const styles = require("./Header.css");

export const Header = () => {
  return (
    <>
      <div className={styles.section}>
        <Header01 />
      </div>
      <div className={styles.section}>
        <Header02 />
      </div>
      <div className={styles.section}>
        <Header03 />
      </div>
    </>
  );
};
