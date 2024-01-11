import React from "react";
import { Outlet } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import "./App.css";
function App() {
  return (
    <div>
      <NavbarComp />
      <Outlet />
    </div>
  );
}

export default App;
