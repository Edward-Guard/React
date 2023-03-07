import React from 'react'
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
    'Chapa-1','Chapa-2','Chapa-3','Chapa-4','Chapa-5','Chapa-6'
]

function CheckItem() {
  return (
    <div>
        <div className='display display-checklist'>
        {cellTitle.map((e)=>(<div className='tabs'>{e}</div>))}
        
        </div>
        <div className='display-cellCheck'>
            <div className='cellCheck'> 
            <input type="checkbox" name="" id="" />
                PVC 6 MM
            </div>
        {itemList.map((e)=>(<div className='cellCheck'> <input type="checkbox" name="" id="" />{e}</div>))}
        </div>

        <div className='display-cellCheck'>
            <div className='cellCheck'> 
            <input type="checkbox" name="" id="" />
                PVC 15 MM
            </div>
        {itemList.map((e)=>(<div className='cellCheck'> <input type="checkbox" name="" id="" />{e}</div>))}
        </div>
        
    </div>
    
    
  )
}

export default CheckItem