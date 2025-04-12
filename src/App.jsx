import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/login";
import Register from "./pages/Auth/register";

function App() {
  return (
    <>
      <Routes>
        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
