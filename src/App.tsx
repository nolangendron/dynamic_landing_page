import React from "react";
import SectionsList from "./components/SectionButtonsList/SectionsList";
import MainContainer from "./components/MainContainer.tsx/MainContainer";
import Sections from "./components/Sections/Sections";
const styles = require("./App.css");

const App = () => {
  return (
    <div className={styles.grid}>
      <SectionsList />
      <MainContainer />
      <Sections />
    </div>
  );
};

export default App;
