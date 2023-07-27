import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserRoute from "./routes/UserRoute";
import AdminRoute from "./routes/AdminRoute";

import Home from "./pages/nonDashboard/Home";
import Login from "./pages/nonDashboard/Login";
import Register from "./pages/nonDashboard/Register";
import Dashboard from "./pages/dashboard/Dashboard";
import Listing from "./pages/dashboard/Listing";
import Profile from "./pages/dashboard/Profile";
import Events from "./pages/dashboard/Events";
import News from "./pages/dashboard/News";
import Testing from "./pages/dashboard/Testing";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        {/* nondashboard view */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/listing" element={<Listing />} />
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/dashboard/events" element={<Events />} />
        <Route path="/dashboard/news" element={<News />} />
        <Route path="/dashboard/testing" element={<Testing />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
