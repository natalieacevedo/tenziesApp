import "./App.css";
import Die from "./components/Die";
import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

export default function App() {
  const [dice, setDice] = useState(newDice());
  const [numberOfRolls, setNumberOfRolls] = useState(0);
  const [bestNumberOfRolls, setBestNumberOfRolls] = useState(
    parseInt(localStorage.getItem("rolls"), 10) || null
  );
  const [bestTime, setBestTime] = useState(
    parseInt(localStorage.getItem("bestTime"), 10) || null
  );
  const [startDate, setStartDate] = useState(new Date());
  const [gameTime, setGameTime] = useState(0);

  const isItOver = dice.every(
    (el, i, arr) => el.isHeld && el.value === arr[0].value
  );

  useEffect(() => {
    if (isItOver && (!bestNumberOfRolls || numberOfRolls < bestNumberOfRolls)) {
      localStorage.setItem("rolls", numberOfRolls.toString());
      setBestNumberOfRolls(numberOfRolls);
    }
  }, [isItOver, numberOfRolls, bestNumberOfRolls]);

  useEffect(() => {
    if (!bestTime || gameTime < bestTime) {
      localStorage.setItem("bestTime", gameTime.toString());
      setBestTime(gameTime);
    }
  }, [bestTime, gameTime]);

  useEffect(() => {
    if (isItOver) {
      setGameTime(() => {
        let miliSeconds = new Date() - startDate;
        return miliSeconds / 1000;
      });
    }
  }, [isItOver, startDate]);

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

  function newGame() {
    setNumberOfRolls(0);
    setStartDate(new Date());

    setDice((prev) => prev.map((el) => onlyOneDie()));
  }

  function rollingDice() {
    setNumberOfRolls((prev) => prev + 1);
    setDice((prev) => prev.map((el) => (!el.isHeld ? onlyOneDie() : el)));
  }

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
          You Won, and did it in only {numberOfRolls} rolls and {gameTime}{" "}
          seconds!
        </h1>
      )}
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls!
      </p>
      <div className="boxesContainer">{die}</div>
      <button
        onClick={() => (isItOver ? newGame() : rollingDice())}
        className="rollDice"
      >
        {isItOver ? "New Game" : "Roll me"}
      </button>

      {bestNumberOfRolls && bestTime ? (
        <p className="best">
          {"Your fewer and therefore best number of rolls is " +
            bestNumberOfRolls +
            ". And your best time is " +
            bestTime +
            " seconds !"}
        </p>
      ) : (
        " "
      )}

      {/* {bestNumberOfRolls && bestTime && (
        <p className="best">
          {"Your fewer and therefore best number of rolls is " +
            bestNumberOfRolls +
            ". And your best time is " +
            bestTime +
            " seconds !"}
        </p>
      )} */}
    </main>
  );
}


 
