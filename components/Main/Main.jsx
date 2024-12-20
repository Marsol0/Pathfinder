import React from "react";
import styles from "./styles.module.css"
import CharacterNav from "../CharacterNav/CharacterNav";
import Character from "../Character/Character";

const Main = () => {
  return (
    <div className={styles.main}>
        <CharacterNav />
        <Character />
    </div>
  );
};
export default Main;
