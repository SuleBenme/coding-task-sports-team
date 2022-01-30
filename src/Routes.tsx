import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import App from "./App";
import Competition from "./Compeitition/Competition";
import "./App.css";

const MainRouter = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/competitions/:competitionId" element={<Competition />} />
      </Routes>
    </div>
  );
};

export default MainRouter;
