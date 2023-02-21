import React ,{ useContext } from 'react';
import { QuizContext } from '../context/quiz';

import Quiz from "../img/quiz.svg"
import "./Welcome.css";

const Welcome = () => {
  const [quizState,dispatch] = useContext(QuizContext)

  
  return (
    <div id="welcome">
        <h2> Bem vindo</h2>
        <p>Clique no botão abaixo para iniciar.</p>
        <button onClick={() => dispatch({type: "CHANGE_STAGE"}) }>Iniciar</button>
        <img src={Quiz} alt="Inicio do Quiz" />
    </div>
  )
}

export default Welcome