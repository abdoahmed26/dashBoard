import React from "react";
import styles from "./OverView.module.css";
import { Spring, LineChart, Chart } from "../../Larose";
import NavBar from "../NavBar/NavBar";

export default function OverView() {
  const data = [
    { value: 20 },
    { value: 60 },
    { value: 100 },
    { value: 213 },
    { value: 400 },
  ];
  const dataLine = [
    [12, 19, 3, 5, 2, 3],
    [8, 13, 6, 7, 9, 11],
  ];

  const labels = ["January", "February", "March", "April", "May", "June"];

  return (
    <>
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
              data={dataLine}
              labels={labels}
              title="Monthly Sales Data"
              height={200}
              width={400}
              lineColors={["#FF5733", "#33C4FF"]}
              lightLineColors={["#FF9999", "#99D9FF"]}
              tooltip={true}
              showSidebar={false}
              showXAxis={true}
            />
          </div>
          <div className={styles.chart}>
            <Chart
              edit={{ border: "none", color: "white", fontWeight: "bold" }}
              data={data}
              labelStyle={{ background: "#ffeb3b" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
