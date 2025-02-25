import React from "react";
import { Route, Routes } from "react-router-dom";
import SortingLayout from "./layouts/SortingLayout.jsx";
import HomeLayout from "./layouts/HomeLayout.jsx";
import Login from "./components/core/Login.jsx";
import Signup from "./components/core/Signup.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/sorting" element={<SortingLayout />} />
        <Route path="/" element={<HomeLayout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
