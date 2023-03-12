import React from 'react'
import "./Cell.css"

function Cell(props) {
  return (
    <div className={`text-cell ${props.class}`}>
        <div>{props.cont} </div>
    </div>
  )
}

export default Cell