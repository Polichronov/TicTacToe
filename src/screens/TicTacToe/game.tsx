import React, { useState }  from "react";
import Board from "./board";
import { History } from "../../types/TicTacToe";

const Game = () => {
    const initialHistory: History[] = [{
        squares: Array(9).fill(null)
      }];

    const [histories, setHistory] = useState<History[]>(initialHistory);
    const [xIsNext, setXIsNext] = useState<boolean>(true);
    const [stepNumber, setStepNumber] = useState<number>(0);

    const handleClick = (i: number)=> {
        const history = histories.slice(0, stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice(); 

        // if (calculateWinner(squares) || squares[i]) {
        //   return;
        // }
        // debugger;

        squares[i] = xIsNext ? 'X': 'Y';
        setHistory(history.concat([{
            squares: squares,
        }]))
        setXIsNext(!xIsNext);
        setStepNumber(history.length);
    }

    debugger;
    const jumpTo = (step: number) => {
        setXIsNext((step % 2) === 0)
        setStepNumber(step)
    }
    
    return (
        <div className="game">
          <div className="game-board">
            <Board 
              squares = {histories[histories.length - 1].squares}
               onClick={(i) => handleClick(i)}
              />
          </div>
        </div>
      );
}

export default Game;