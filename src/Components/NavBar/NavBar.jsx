import React from "react";
import styles from "./NavBar.module.css";
import Icons from "../../assets/icons/Icons";
export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <ul>
        <li> {Icons.blog} </li>
        <li>{Icons.star}</li>
        <li style={{ color: "gray" }}>DashBoards</li>
        <li>Default</li>
      </ul>
      <ul className={styles.searchBarParent}>
        <div className={styles.searchBar}>
          <div>{Icons.search}</div>
          <input className={styles.search} type="text" placeholder="Search /" />
        </div>
        <div>{Icons.mode}</div>
        <div>{Icons.clock}</div>
        <div>{Icons.notification}</div>
        <div>{Icons.blog}</div>
      </ul>
    </div>
  );
}
