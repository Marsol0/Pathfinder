import React from "react";

import PageTemplate from "@/components/PageTemplate/PageTemplate";
import quests from "../../src/data/quests.json";
import styles from "./styles.module.css";

const AllQuests = () => {
  return (
    <div>
      <PageTemplate className={styles.wrapper}>
        <div className={styles.allQuestsWrapper}>
          <h1>Quests</h1>
          <ul>
            {quests.map((q) => (
              <li key={q.id} className={styles.questItem}>
                <h1>{q.name}</h1>
                <h2>{q.description}</h2>
              </li>
            ))}
          </ul>
        </div>
      </PageTemplate>
    </div>
  );
};

export default AllQuests;
