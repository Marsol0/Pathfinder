import React from "react";
import styles from "./styles.module.css";
const CharacterInventory = () => {

    const gridItems = Array.from({ length: 36 }, (_, index) => (
        <div key={index} className={styles[`div${index + 1}`]}></div>
      ));
   
    

  return (
    <div className={styles.wrapper}>
      <div className={styles.inventoryNav}>
        <ul>
          <li>Equipment</li>
          <li>Consumables</li>
          <li>Quest</li>
          <li>Materials</li>
        </ul>
      </div>
      <div className={styles.inventory}>
      {gridItems}
      </div>
    </div>
  );
};

export default CharacterInventory;
