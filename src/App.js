import "./App.css";
import Die from "./components/Die";
import React, { useState } from "react";

export default function App() {
  const [dice, setDice] = useState(newDice());

  console.log(dice);
  const isItOver = dice.every(
    (el, i, arr) => el.isHeld && el.value === arr[0].value
  );

  function onlyOneDie() {
    let oneObject = {
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false,
    };
    return oneObject;
  }

  function newDice() {
    let allValues = [];
    for (let i = 1; i <= 10; i++) {
      allValues.push(onlyOneDie());
    }

    return allValues;
  }

  function rollingDice() {
    setDice((prev) => {
      return prev.map((el) => {
        if (isItOver || !el.isHeld) {
          return onlyOneDie();
        } else {
          return el;
        }
      });
    });
  }

  function switchIsHeld(event, indi) {
    event.preventDefault();
    console.log(event);
    console.log(indi);

    setDice((prev) => {
      return prev.map((el, index) =>
        indi === index ? { ...el, isHeld: !el.isHeld } : el
      );
    });
  }

  console.log(isItOver);

  const die = dice.map((die, ind) => (
    <Die
      index={ind}
      key={ind}
      value={die.value}
      isHeld={die.isHeld}
      switchIsHeld={switchIsHeld}
    />
  ));

  return (
    <main className="mainBody">
      <h1 className="mainTitle">Tenzies app</h1>
      <div className="boxesContainer">{die}</div>
      <button onClick={rollingDice} className="rollDice">
        {isItOver ? "Start again" : "Roll me"}
      </button>
    </main>
  );
}
