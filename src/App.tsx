import React, { MouseEventHandler } from 'react'
import './App.css'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { amountAdded } from './feutures/counder/counter-slice';
import Game from './screens/TicTacToe/game'

function App() {
  const counter = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  const onClick: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(amountAdded(2))
  }

  return (
    <div>
      <button onClick={onClick}>
        count is {counter}
      </button>
      {/* <Game/> */}
    </div>
  )
}

export default App
