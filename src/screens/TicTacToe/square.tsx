import React from "react";
import { SquareType } from "../../types/TicTacToe";
import { Button } from 'baseui/button';

const Square = ({
    value,
    onClick
} : SquareType) => {
    return(
        <Button onClick={onClick} >
          {value}
        </Button>)
}

export default Square;