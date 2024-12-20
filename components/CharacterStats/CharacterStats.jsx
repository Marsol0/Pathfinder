import React from "react";
import styles from "./styles.module.css";
const CharacterStats = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.displayLevel}>
        <h2>40</h2>
        <h2>LEVEL</h2>
      </div>

      <div className={styles.attack}>
        <div className={styles.attackImgDiv}></div>
        <div className={styles.attackStats}>
          <h3>Attack</h3>
          <h3>15.666</h3>
        </div>
      </div>
    </div>
  );
};
export default CharacterStats;
