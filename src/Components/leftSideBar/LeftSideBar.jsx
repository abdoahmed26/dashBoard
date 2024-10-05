import React, { useState } from "react";
import styles from "./LeftSideBar.module.css";
import Avatar from "../../assets/LaRose.webp";
import Icons from "../../assets/icons/Icons";

export default function LeftSideBar() {
  // State to manage the open/closed status of collapsible sections
  const [openSection, setOpenSection] = useState(null);

  // State to manage sidebar visibility on small screens
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Function to toggle collapsible sections
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  // Function to toggle sidebar on small screens
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      {/* Button to toggle sidebar visibility on small screens */}
      <button className={styles.sidebarToggleButton} onClick={toggleSidebar}>
        {sidebarOpen ? "Close Sidebar" : "Open Sidebar"}
      </button>

      <section
        className={`${styles.leftSideParent} ${sidebarOpen ? styles.open : ""}`}
      >
        <div className={styles.avatar}>
          <img
            src={
              "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100221.jpg?size=626&ext=jpg&ga=GA1.1.1694168275.1727378374&semt=ais_hybrid"
            }
            alt="User Avatar"
          />
          <div className={styles.username}>HamdyMohamedak</div>
        </div>

        <nav className={styles.navItems}>
          <div className={styles.navItem}>Overview</div>
          <div className={styles.navItem}>Projects</div>
          <div className={styles.navItem}>Dashboards</div>

          {/* Collapsible Sections with Logic */}
          <details
            className={styles.details}
            open={openSection === "eCommerce"}
          >
            <summary
              className={styles.summary}
              onClick={() => toggleSection("eCommerce")}
            >
              {Icons.Ecommerce} eCommerce
            </summary>
          </details>

          <details className={styles.details} open={openSection === "Projects"}>
            <summary
              className={styles.summary}
              onClick={() => toggleSection("Projects")}
            >
              {Icons.Folder} Projects
            </summary>
          </details>

          <details
            className={styles.details}
            open={openSection === "OnlineCourses"}
          >
            <summary
              className={styles.summary}
              onClick={() => toggleSection("OnlineCourses")}
            >
              {Icons.openBook} Online Courses
            </summary>
          </details>

          <div className={styles.pages}>Pages</div>

          <details
            className={styles.details}
            open={openSection === "UserProfile"}
          >
            <summary
              className={styles.summary}
              onClick={() => toggleSection("UserProfile")}
            >
              {Icons.userProfile} User Profile
            </summary>
            {/* Sub-menu inside collapsible */}
            <div className={styles.subDetails}>
              <div>Overview</div>
              <div>Projects</div>
              <div>Campaigns</div>
              <div>Documents</div>
              <div>Followers</div>
            </div>
          </details>

          <details className={styles.details} open={openSection === "Account"}>
            <summary
              className={styles.summary}
              onClick={() => toggleSection("Account")}
            >
              {Icons.account} Account
            </summary>
          </details>

          <details
            className={styles.details}
            open={openSection === "Corporate"}
          >
            <summary
              className={styles.summary}
              onClick={() => toggleSection("Corporate")}
            >
              {Icons.man} Corporate
            </summary>
          </details>

          <details className={styles.details} open={openSection === "Blog"}>
            <summary
              className={styles.summary}
              onClick={() => toggleSection("Blog")}
            >
              {Icons.blog} Blog
            </summary>
          </details>

          <details className={styles.details} open={openSection === "Social"}>
            <summary
              className={styles.summary}
              onClick={() => toggleSection("Social")}
            >
              {Icons.SMS} Social
            </summary>
          </details>
        </nav>
      </section>
    </>
  );
}
