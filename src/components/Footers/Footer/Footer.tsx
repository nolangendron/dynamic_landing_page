import React from "react";
import Footer01 from "../Footer01/Footer01";
import Footer02 from "../Footer02/Footer02";
import Footer03 from "../Footer03/Footer03";
const styles = require("./Footer.css");

export const Footer = () => {
  return (
    <>
      <div className={styles.section}>
        <Footer01 />
      </div>
      <div className={styles.section}>
        <Footer02 />
      </div>
      <div className={styles.section}>
        <Footer03 />
      </div>
    </>
  );
};
