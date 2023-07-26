import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserRoute from "./routes/UserRoute";
import AdminRoute from "./routes/AdminRoute";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <UserRoute />
      </BrowserRouter>

      <BrowserRouter basename="/dashboard">
        <AdminRoute />
      </BrowserRouter>
    </>
  );
}

export default App;
