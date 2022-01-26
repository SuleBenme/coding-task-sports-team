import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Competitions from "./Competitions/Competitions";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Competitions />
      </header>
    </div>
  );
}

export default App;
