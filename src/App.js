import React from "react";
import OverView from "./Components/OverView/OverView";
import ChatPage from "./Components/ChatPage/ChatPage";
import Register from "./Components/Register/Login";
import { RoseRouter, Route } from "larose-js";
export default function App() {
  return (
    <RoseRouter>
      <Route element={<OverView />} path={"/o"} />
      <Route element={<Register />} path={"/"} />
      <Route element={<ChatPage />} path={"/ChatPage"} />
    </RoseRouter>
  );
}
