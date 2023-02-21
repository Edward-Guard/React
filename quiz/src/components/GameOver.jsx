import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import WellDone from "../img/welldone.svg"

const GameOver = () => {
  return (
    <div id='gameover'>
        <h2>Game Over</h2>
        <p>Pontuação: x</p>
        <p>Você acertou y de z perguntas </p>
        <img src={WellDone} alt="Fim do quiz" />
    
    </div>
  )
}

export default GameOver