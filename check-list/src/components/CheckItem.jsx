import React from 'react'
import Cell from './Cell'
import './CheckItem.css'

const cellTitle = [
    'Acrilico',
    'PVC',
    'Reforço',
    'Móveis',
    'Divinicell',
    'Teca'
]

const itemList= [
    'Chapa-1','Chapa-2','Chapa-3','Chapa-4','Chapa-5','Chapa-6',
    'Chapa-1','Chapa-2','Chapa-3','Chapa-4','Chapa-5','Chapa-6',
    'Chapa-1','Chapa-2','Chapa-3','Chapa-4','Chapa-5','Chapa-6',
    
]

const show =(e)=>{
    console.log(e.target.innerHTML)
}

function CheckItem() {
  return (
<div>
    <div className='display display-checklist'>
        {cellTitle.map((e)=>(<div onClick={show} className='tabs'>{e}</div>))}
    </div>

    <div className='cell-display '>
        <div className='cellCheck'> 
            <input type="checkbox" name="" id="" />
                PVC 6 MM
        </div>
        <div className='cell-corte '>{itemList.map((e)=>(<Cell cellCont = {e}/>))}</div>
    </div>
</div>
    
    
  )
}

export default CheckItem