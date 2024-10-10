import React, { useState } from "react";
import styles from "./RightSideBar.module.css";
import { MenuPop } from "larose-js";

const RightSideBar = () => {
  const [rightSideData, setRightSideData] = useState([
    {
      message: "you fixed a bug",
      time: "2 mins ago",
      img: "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?size=626&ext=jpg&ga=GA1.1.1694168275.1727378374&semt=ais_hybrid",
    },
    {
      message: "new message received",
      time: "2 mins ago",
      img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.1.1694168275.1727378374&semt=ais_hybrid",
    },
    {
      message: "system update available",
      time: "2 mins ago",
      img: "https://img.freepik.com/free-psd/3d-illustration-business-man-with-glasses_23-2149436194.jpg?size=626&ext=jpg&ga=GA1.1.1694168275.1727378374&semt=ais_hybrid",
    },
    {
      message: "you achieved a milestone",
      time: "2 mins ago",
      img: "https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833554.jpg?size=626&ext=jpg&ga=GA1.1.1694168275.1727378374&semt=ais_hybrid",
    },
    {
      message: "bug fix deployed",
      time: "2 mins ago",
      img: "https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436191.jpg?size=626&ext=jpg&ga=GA1.1.1694168275.1727378374&semt=ais_hybrid",
    },
    {
      message: "feature added",
      time: "2 mins ago",
      img: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671126.jpg?size=626&ext=jpg&ga=GA1.1.1694168275.1727378374&semt=ais_hybrid",
    },
    {
      message: "code review passed",
      time: "2 mins ago",
      img: "https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg?size=626&ext=jpg&ga=GA1.1.1694168275.1727378374&semt=ais_hybrid",
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Button to toggle sidebar visibility on small screens */}
      <button className={styles.toggleButton} onClick={toggleSidebar}>
        {isOpen ? "Close" : "Open"} Notifications
      </button>

      {/* Sidebar content */}
      <section className={`${styles.navbar} ${isOpen ? styles.show : ""}`}>
        <h2>Notifications</h2>
        {rightSideData.map((ObjectData, index) => (
          <div key={index} className={styles.bar}>
            <div className={styles.barContent}>
              <img
                className={styles.noteImg}
                src={ObjectData.img}
                alt="notification icon"
                
                />
              <h4>{ObjectData.message}</h4>
              {/* Fixed to use ObjectData.message */}
            </div>
            <div className={styles.time}>{ObjectData.time}</div>{" "}
            {/* Fixed to use ObjectData.time */}
          </div>
        ))}
      </section>
    </div>
  );
};

export default RightSideBar;
