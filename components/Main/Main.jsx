import React from "react";
import styles from "./styles.module.css"
import CharacterNav from "../CharacterNav/CharacterNav";
import Character from "../Character/Character";
import CharacterInventory from "../CharacterInventory/CharacterInventory"

const Main = () => {
  return (
    <div className={styles.main}>
        <CharacterNav />
        <Character />
        <CharacterInventory />
    </div>
  );
};
export default Main;
