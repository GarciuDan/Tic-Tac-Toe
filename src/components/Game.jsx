import React, { useState } from "react";
import { calculatetWiner } from "../healper";
import Board from "./Board";
import "./Game.css";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setIsNext] = useState(true);
  const winner = calculatetWiner(board);

  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = xIsNext ? "X" : "0";
    setBoard(boardCopy);
    setIsNext(!xIsNext);
  };

  const startNewGame = () => {
    return (
      <button
        className="start__btn"
        onClick={() => setBoard(Array(9).fill(null), setIsNext(true))}
      >
        Field Clear
      </button>
    );
  };
  console.log(winner)
  return (
    <div className="wrapper">
      {startNewGame()}
      <Board squares={board} click={handleClick} />
      <p className="gameInfo">
        {winner ? "Winner " + winner : "Player " + (xIsNext ? " X" : " 0")}
      </p>
    </div>
  );
};

export default Game;
