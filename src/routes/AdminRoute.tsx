import React from "react";
import Topnav from "../components/Topnav";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/nonDashboard/Login";
import Register from "../pages/nonDashboard/Register";

function AdminRoute() {
  return (
    <div className="w-full">
      <div className="w-full">
        <Topnav />
      </div>
      <Routes>
        {/* dashboard view */}
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default AdminRoute;
