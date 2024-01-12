import React from "react";
import { Outlet } from "react-router-dom";
import NavbarComp from "../src/components/Layouts/NavbarComp";
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
