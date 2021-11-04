import React from "react";
import { SquareType } from "../../types/TicTacToe";

const Square = ({
    value,
    onClick
} : SquareType) => {
    return(
        <button className="square" onClick={onClick} >
          {value}
        </button>)
}

export default Square;