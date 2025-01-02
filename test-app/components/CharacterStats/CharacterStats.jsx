import React from "react";
import styles from "./styles.module.css";
const CharacterStats = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.displayLevel}>
        <h2>40</h2>
        <h2>LEVEL</h2>
      </div>

      <div className={styles.AttributeCard}>
        <div className={styles.iconWrapper}>
          <img src="https://png.pngtree.com/png-vector/20220609/ourmid/pngtree-crossed-swords-icon-isolated-on-white-background-with-black-leather-handle-png-image_4820455.png" alt="" />
        </div>
        <div className={styles.attributes}>
          <h3>Attack</h3>
          <h3>15.666</h3>
        </div>
      </div>

     

      <div className={styles.AttributeCard}>
        <div className={styles.iconWrapper}>
          <img src="https://images.vexels.com/content/134780/preview/silhouette-emblem-shield-6fd11a.png" alt="" />
        </div>
        <div className={styles.attributes}>
          <h3>Defence</h3>
          <h3>15.666</h3>
        </div>
      </div>

     

      <div className={styles.AttributeCard}>
        <div className={styles.iconWrapper}>
          <img src="https://img.itch.zone/aW1nLzM2NTU5NjkucG5n/315x250%23c/J%2FUr%2Fu.png" alt="" />
        </div>
        <div className={styles.attributes}>
          <h3>Life</h3>
          <h3>15.666</h3>
        </div>
      </div>

    

      <div className={styles.AttributeCard}>
        <div className={styles.iconWrapper}>
          <img src="https://png.pngtree.com/png-vector/20220424/ourmid/pngtree-shoes-icon-logo-vector-illustration-design-athletic-foot-faster-vector-png-image_36114032.png" alt="" />
        </div>
        <div className={styles.attributes}>
          <h3>Agile</h3>
          <h3>15.666</h3>
        </div>
      </div>

      

    
    </div>
  );
};
export default CharacterStats;
