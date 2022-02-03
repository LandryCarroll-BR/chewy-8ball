import React, { useState } from "react";
import "../styles/App.css";
import Chewy from "../util/chewy";
import Response from "../util/response";

function App() {
  const [index, setIndex] = useState(1);

  const getRandomNum = () => Math.floor(Math.random() * 31);
  const getRandomChewy = () => {
    setTimeout;
    setIndex(getRandomNum);
  };

  return (
    <div className="app">
      <h1 className="title">Ask Chewy</h1>
      <Chewy number={index} />
      <Response number={index} />
      <button className="button" onClick={getRandomChewy}>
        Chewy&#x27;s Response
      </button>
    </div>
  );
}

export default App;
