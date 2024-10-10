import React, { useState } from "react";
import styles from "./LeftSideBar.module.css";
import Icons from "../../assets/icons/Icons";
import { MenuPop, useRouter } from "larose-js";
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

  let SocialMedia = [
    {
      label: "GitHub",
      onClick: () => window.open("https://github.com/hamdymohamedak"),
    },
    {
      label: "Resume",
      onClick: () => window.open("https://hamdymohamedak.vercel.app"),
    },
    {
      label: "Portfolio",
      onClick: () => window.open("https://askander.vercel.app"),
    },
    {
      label: "More",
      onClick: () =>
        window.open(
          "https://github.com/hamdymohamedak/Portfolio-master/blob/main/README.md"
        ),
    },
  ];

  // Router

  let { navigate } = useRouter();
  return (
    <>
      {/* Button to toggle sidebar visibility on small screens */}
      <button className={styles.sidebarToggleButton} onClick={toggleSidebar}>
        {sidebarOpen ? "Close Sidebar" : "Open Sidebar"}
      </button>

      <section
        className={`${styles.leftSideParent} ${sidebarOpen ? styles.open : ""}`}
      >
        <MenuPop
          items={[
            {
              content: (
                <div>
                  <div style={{ color: "black" }}>Settings</div>
                </div>
              ),
              // onClick: () => console.log("Bold Item clicked"),
            },
            {
              content: (
                <div>
                  <i style={{ color: "black" }}>Profile</i>
                </div>
              ),
              onClick: () => console.log("Italic Item clicked"),
            },
            {
              content: <b style={{ color: "red" }}>Log-out</b>,
              // onClick: () => console.log("Button clicked"),
            },
          ]}
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
        </MenuPop>
        <nav className={styles.navItems}>
          <div className={styles.navItem}>Overview</div>
          <div
            onClick={() => {
              navigate("/ChatPage");
            }}
            className={styles.navItem}
          >
            Chat
          </div>
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
