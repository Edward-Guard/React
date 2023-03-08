import React from "react";
import { useState,useEffect } from "react";
import './TicTacToe.css'

function TicTacToe() {
  const emptyboard = Array(9).fill("")
  

  const [board,setBoard] = useState(emptyboard);
  const [currentPlayer, setCurrentPlayer] = useState("O")
  const [winner, setWinner] = useState(null)

  const handleCellClick = (index)=>{
    if(winner){
      console.log("Jogo Finalizado")
      return null}

    if(board[index] !== ""){
      console.log("Posição ocupada")
      return null}
    setBoard(board.map((item,itemIndex) => itemIndex=== index ? currentPlayer : item ));
    
    setCurrentPlayer(currentPlayer === 'X' ? "O" : "X")
  }

  const checkWinner= ()=>{
    const possibleWaysToWin = [
      [board[0],board[1],board[2]],
      [board[3],board[4],board[5]],
      [board[6],board[7],board[8]],
      
      [board[0],board[3],board[6]],
      [board[1],board[4],board[7]],
      [board[0],board[3],board[6]],

      [board[0],board[4],board[8]],
      [board[2],board[4],board[6]],
    ]

    possibleWaysToWin.forEach(cells => {
      if (cells.every(cell => cell=== "O")) setWinner("O")
      if (cells.every(cell => cell=== "X")) setWinner("X")
    })

    checkdraw()
  }

  const checkdraw = ()=> {
    if (board.every(cell => cell !== "")){
      setWinner("E")
    }
  }
  useEffect(checkWinner,[board]);

  const resetGame= ()=>{
    setCurrentPlayer("O")
    setBoard(emptyboard)
    setWinner(null)
  }

  return (
    <main>
          <h1 className="title">Jogo da Velha</h1>

          <div className={`board ${winner ? "game-over":""}`}>
            {board.map((item,index) =>(
              <div
                key={index}
                className={`cell ${item}`}
                onClick={() => handleCellClick(index)}
              >
                {item}
              </div>
            ))}
            
          </div>
          {winner &&
            <footer>
              {winner === "E" ? <h2 className="winner-message">
              <span className={winner}>Empatou!</span> </h2>
              :
              <h2 className="winner-message">
              <span className={winner}>{winner}</span> Venceu! 
              
            </h2>}
            

            <button onClick={resetGame}>Recomeçar jogo!</button>
          </footer>
          }
          
    </main>
  );
}

export default TicTacToe;
