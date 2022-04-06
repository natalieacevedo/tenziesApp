import "./App.css";
import Die from "./components/Die";
import React, { useState } from "react";
//import useWindowSize from "react-use-window-size";
import Confetti from "react-confetti";

export default function App() {
  const [dice, setDice] = useState(newDice());
  //const { width, height } = useWindowSize();
  //console.log(width, height);

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
      {isItOver && <Confetti />}
      <h1 className="mainTitle">Tenzies app</h1>
      {isItOver && <h1 className="winner">You Won!</h1>}
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


 
