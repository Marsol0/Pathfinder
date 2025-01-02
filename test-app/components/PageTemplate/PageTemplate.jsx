import React from "react";
import styles from "./styles.module.css";
import Character from "../Character/Character";
import CatagoryNav from "../Categorynav/CatagoryNav";


import CharacterNav from "../CharacterNav/CharacterNav";

const PageTemplate = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <CharacterNav />

      <Character />
      
      <CatagoryNav />
      
      <div>{children}</div>
    </div>
  );
};

export default PageTemplate;
