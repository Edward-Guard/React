import React from 'react'
import './Display.css'

const cellTitle = [
    'Acrilico',
    'PVC',
    'Reforço',
    'Móveis',
    'Divinicell',
    'Teca'
]

const cellDisplay=[
    '8mm','6mm','6mm','6mm','','',
    '10mm','','10mm','10mm','','',
    '','15mm','15mm','15mm','15mm','',
    '','','','','','25mm',
]

function Display() {
  return (
    
        <div className='display'>
        {cellTitle.map((e,index)=>(<div key={index} className='cel cinza'>{e}</div>))}
        {cellDisplay.map((e,index)=>(<div key={index} className='cel branco'>{e}</div>))}
        </div>

    
    
  )
}

export default Display