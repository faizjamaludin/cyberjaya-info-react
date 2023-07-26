import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserRoute from "./routes/UserRoute";
import AdminRoute from "./routes/AdminRoute";

import Home from "./pages/nonDashboard/Home";
import Login from "./pages/nonDashboard/Login";
import Register from "./pages/nonDashboard/Register";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        {/* nondashboard view */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
