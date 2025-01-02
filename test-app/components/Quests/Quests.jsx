"use client"; 

import React, { useEffect, useState } from "react";
import styles from "./styles.module.css"

const Quests = () => {
  const [quests, setQuests] = useState([]); 
  const [error, setError] = useState(null); 


  return (
    <div className={styles.wrapper}>
      <h1>labas</h1>
    </div>
   
  );
};

export default Quests;
