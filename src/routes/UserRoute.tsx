import React from "react";
import Topnav from "../components/Topnav";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/nonDashboard/Home";

function UserRoute() {
  return (
    <div className="w-full">
      <div className="w-full">
        <Topnav />
      </div>
      <Routes>
        {/* non-dashboard view */}
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default UserRoute;
