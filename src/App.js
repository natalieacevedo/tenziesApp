import "./App.css";
import Die from "./components/Die";
import React, { useState, useEffect } from "react";

export default function App() {
  const [dice, setDice] = useState([
    {
      isHeld: false,
      value: newDice(),
    },
  ]);

  function newDice() {
    let allValues = [];
    for (let i = 1; i <= 10; i++) {
      const oneToSixNumber = Math.floor(Math.random() * 6) + 1;
      allValues.push(oneToSixNumber);
    }
    return allValues;
  }

  function rollingDice() {
    setDice((prev) => prev.map((die) => ({ ...die, value: newDice() })));
  }

  //useEffect(newDice, []);

  const die = dice[0].value.map((die, ind) => <Die key={ind} value={die} />);

  return (
    <main className="mainBody">
      <h1 className="mainTitle">Tenzies app</h1>
      <div className="boxesContainer">{die}</div>
      <button onClick={rollingDice} className="rollDice">
        Roll me
      </button>
    </main>
  );
}
