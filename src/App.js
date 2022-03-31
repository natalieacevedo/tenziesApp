import "./App.css";
import Die from "./components/Die";
import React, { useState, useEffect } from "react";

export default function App() {
  const [dice, setDice] = useState(newDice());

  function newDice() {
    let allValues = [];
    for (let i = 1; i <= 10; i++) {
      const oneToSixNumber = Math.floor(Math.random() * 6) + 1;
      allValues.push({ value: oneToSixNumber, isHeld: false });
    }
    return allValues;
  }

  function rollingDice() {
    // setDice((prev) => prev.map((die) => ({ ...die, value: newDice() })));
    setDice(newDice());
  }
  console.log(dice);
  //useEffect(newDice, []);

  const die = dice.map((die, ind) => (
    <Die key={ind} value={die.value} isHeld={die.isHeld} />
  ));

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
