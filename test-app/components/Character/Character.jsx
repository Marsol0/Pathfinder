import styles from "./styles.module.css";
import CharacterStats from "../CharacterStats/CharacterStats";
const Character = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <img
          src="https://p325k7wa.twic.pics/high/elden-ring/elden-ring/05-characters/elden-ring-character-hero-full-new.png?twic=v1/resize=230/step=10/quality=80"
          alt=""
        />
      </div>
      <CharacterStats />
    </div>
    
  );
};
export default Character;
