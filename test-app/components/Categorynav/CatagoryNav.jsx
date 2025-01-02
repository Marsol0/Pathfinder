import React from 'react'
import styles from "./styles.module.css"
import Link from "next/link";

const CatagoryNav = () => {
  return (
    <div>
        <div className={styles.inventoryNav}>
          <ul>
            <Link href={"/"}>
              <li>Equipment</li>
            </Link>

            <li>Consumables</li>
            <Link href={"/allQuests"}>
              <li>Quests</li>
            </Link>
            <li>Materials</li>
          </ul>
        </div>
    </div>
  )
}

export default CatagoryNav