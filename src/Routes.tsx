import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import App from "./App";
import Competition from "./Compeitition/Competition";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/competitions/:competitionId" element={<Competition />} />
    </Routes>
  );
};

export default MainRouter;
