import React, { useState } from "react";
import "../styles/App.css";
import Chewy from "../util/chewy";
import Response from "../util/response";

function App() {
  const [chewy, setChewy] = useState(1);
  const [response, setResponse] = useState(1);

  const getRandomNum = () => Math.floor(Math.random() * 31);
  const getRandomChewy = () => {
    const num = getRandomNum();
    setChewy(num);
    setTimeout(() => setResponse(num), 200);
  };

  return (
    <div className="app">
      <h1 className="title">Ask Chewy</h1>
      <Chewy number={chewy} />
      <Response number={response} />
      <button className="button" onClick={getRandomChewy}>
        Chewy&#x27;s Response
      </button>
    </div>
  );
}

export default App;
