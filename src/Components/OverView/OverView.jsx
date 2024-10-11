import React from "react";
import styles from "./OverView.module.css";
import { Spring, LineChart, Chart } from "larose-js";
import NavBar from "../NavBar/NavBar";
import RightSideBar from "../RightSideBar/RightSideBar";
import LeftSideBar from "../leftSideBar/LeftSideBar";

export default function OverView() {
  const data = [
    { value: 20 },
    { value: 60 },
    { value: 100 },
    { value: 213 },
    { value: 400 },
  ];
  const xAxis = {
    data: ["January", "February", "March", "April", "May", "June", "July"],
  };
  const series = [
    { data: [3, 2, 1, 5, 6, 2, 4] },
    { data: [2, 3, 4, 1, 5, 7, 6] },
  ];

  return (
    <div style={{ display: "flex" }}>
      <LeftSideBar />
      <section className={styles.overflow}>
        <NavBar />
        <div className={styles.title}>
          <div>OverView</div>
          <details>
            <summary>Today</summary>
          </details>
        </div>
        <div className={styles.overflowInfo}>
          <Spring RoseID={styles.spring}>
            <div className={styles.viewContainer}>
              <div style={{ fontSize: "1rem" }}>views</div>
              <div style={{ textAlign: "end", fontWeight: "bold" }}>
                7,265 <h6>+11.02%</h6>
              </div>
            </div>
          </Spring>
          <Spring RoseID={styles.spring}>
            <div className={styles.viewContainer}>
              <div style={{ fontSize: "1rem" }}>Visits</div>
              <div style={{ textAlign: "end", fontWeight: "bold" }}>
                7,265 <h6>+11.02%</h6>
              </div>
            </div>
          </Spring>
          <Spring RoseID={styles.spring}>
            <div className={styles.viewContainer}>
              <div style={{ fontSize: "1rem" }}>New Users</div>
              <div style={{ textAlign: "end", fontWeight: "bold" }}>
                7,265 <h6>+11.02%</h6>
              </div>
            </div>
          </Spring>
          <Spring RoseID={styles.spring}>
            <div className={styles.viewContainer}>
              <div style={{ fontSize: "1rem" }}>Active Users</div>
              <div style={{ textAlign: "end", fontWeight: "bold" }}>
                7,265 <h6>+11.02%</h6>
              </div>
            </div>
          </Spring>
        </div>
        <div className={styles.chartsParent}>
          <div className={styles.lineChart}>
            <LineChart
              xAxis={xAxis}
              series={series}
              height={250}
              width={"50rem"}
              margin={{ top: 10, bottom: 10 }}
            />
          </div>
          <div className={styles.chart}>
            <Chart
              edit={{
                border: "none",
                background: "transparent",
                fontWeight: "bold",
              }}
              data={data}
              labelStyle={{ background: "#ffeb3b" }}
            />
          </div>
        </div>
      </section>
      <RightSideBar />
    </div>
  );
}
