import React from "react";
import OverView from "./Components/OverView/OverView";
import ChatPage from "./Components/ChatPage/ChatPage";
import { RoseRouter, Route } from "larose-js";
export default function App() {
  return (
    <RoseRouter>
      <Route element={<OverView />} path={"/"} />
      <Route element={<ChatPage />} path={"/ChatPage"} />
    </RoseRouter>
  );
}
