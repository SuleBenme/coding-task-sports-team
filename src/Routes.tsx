import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import App from "./App";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  );
};

export default MainRouter;
