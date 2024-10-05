import React from "react";
import OverView from "./Components/OverView/OverView";
import RightSideBar from "./Components/RightSideBar/RightSideBar";
import LeftSideBar from "./Components/leftSideBar/LeftSideBar";
export default function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <LeftSideBar />
      <OverView />
      <RightSideBar />
    </div>
  );
}
