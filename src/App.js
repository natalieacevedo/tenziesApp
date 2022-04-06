import "./App.css";
import Die from "./components/Die";
import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

export default function App() {
  const [dice, setDice] = useState(newDice());
  const [numberOfRolls, setNumberOfRolls] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [bestNumberOfRolls, setBestNumberOfRolls] = useState("");
  const [bestTime, setBestTime] = useState("");

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
    console.log(startDate);
    setNumberOfRolls((prev) => (isItOver ? 0 : prev + 1));
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

  useEffect(() => {
    if (isItOver) {
      setEndDate(() => {
        let miliSeconds = new Date() - startDate;
        return miliSeconds / 1000;
      });
    }
  }, [isItOver, startDate]);

  console.log(endDate);

  function switchIsHeld(event, indi) {
    event.preventDefault();

    setDice((prev) => {
      return prev.map((el, index) =>
        indi === index ? { ...el, isHeld: !el.isHeld } : el
      );
    });
  }

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
      {isItOver && <Confetti />}
      <h1 className="mainTitle">Tenzies app</h1>
      {isItOver && (
        <h1 className="winner">
          You Won, and did it in only {numberOfRolls} rolls and {endDate}{" "}
          seconds!
        </h1>
      )}
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls!
      </p>
      <div className="boxesContainer">{die}</div>
      <button onClick={rollingDice} className="rollDice">
        {isItOver ? "New Game" : "Roll me"}
      </button>
    </main>
  );
}


 
