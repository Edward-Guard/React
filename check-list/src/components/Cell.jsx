import React from 'react'
import "./Cell.css"

function Cell(props) {
  return (
    <div className='cell'>
        <input type="checkbox" name="" id="" value="checked"/>
        <div className='text-cell'>{props.cellCont}</div>
    </div>
  )
}

export default Cell