import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/login";
import Register from "./pages/Auth/register";
import HomePage from "./pages/home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
