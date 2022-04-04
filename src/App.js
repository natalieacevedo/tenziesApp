import "./App.css";
import Die from "./components/Die";
import React, { useState, useEffect } from "react";

export default function App() {
  const [dice, setDice] = useState(newDice());

  console.log(dice);

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
    //setDice(newDice());
    setDice((prev) => {
      return prev.map((el) => (el.isHeld ? el : onlyOneDie()));
    });
  }

  function switchIsHeld(event, indi) {
    event.preventDefault();
    console.log(event);
    console.log(indi);

    const chosenNumber = parseInt(event.currentTarget.textContent);
    console.log(typeof chosenNumber, chosenNumber);

    setDice((prev) => {
      return prev.map((el, index) => {
        !el.isHeld
          ? (event.target.style.backgroundColor = "red")
          : (event.target.style.backgroundColor = "white");

        return Object.values(el).includes(chosenNumber) && indi === index
          ? { ...el, isHeld: !el.isHeld }
          : { ...el };
      });
    });
  }
  //useEffect(newDice, []);

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
        Roll me
      </button>
    </main>
  );
}
