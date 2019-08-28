import React from "react";
import Hero01 from "../Hero01/Hero01";
import Hero02 from "../Hero02/Hero02";
import Hero03 from "../Hero03/Hero03";
const styles = require("./Hero.css");

export const Hero = () => {
  return (
    <>
      <>
        <div className={styles.section}>
          <Hero01 />
        </div>
        <div className={styles.section}>
          <Hero02 />
        </div>
        <div className={styles.section}>
          <Hero03 />
        </div>
      </>
    </>
  );
};
