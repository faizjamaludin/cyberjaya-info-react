// src/routerConfig.tsx
import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// Import your components for routing
import Home from "../pages/nonDashboard/Home";
import Login from "../pages/nonDashboard/Login";
import Register from "../pages/nonDashboard/Register";

// Create the routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      {/* ... etc. */}
    </Route>
  )
);

export default router;
