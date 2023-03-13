import React, { useState } from 'react'
import Cell from './Cell'
import './CheckItem.css'


function CheckItem() {

    let cellTitle = [
        'Acrilico',
        'PVC',
        'Reforço',
        'Móveis',
        'Divinicell',
        'Teca'
    ]
    
    let [acList,setAcList] = useState(['false','false','false','false','false','false',])
    let [pvcList,setPvcList] = useState(['false','false','false','false','false','false',])
    let [reforcoList,setReforcoList] = useState(['false','false','false','false','false','false',])
    
    const [change,setChange] = useState('Acrilico');
    
    
    let checkAc = (e,index)=>{
        let tempArray = [...acList];
        let value =tempArray[index]
        tempArray.splice(index,1,!value)
        setAcList(tempArray)
    }

    let checkPvc = (e,index)=>{
        
        let tempArray = [...pvcList];
        let value =tempArray[index]
        tempArray.splice(index,1,!value)
        setPvcList(tempArray)
    }

    let checkReforco = (e,index)=>{
        
        let tempArray = [...reforcoList];
        let value =tempArray[index]
        tempArray.splice(index,1,!value)
        setReforcoList(tempArray)
    }

    
    
    ///if (cells.every(cell => cell=== "O")) setWinner("O")

  return (
<div>
    <div className='display display-checklist'>
        {cellTitle.map((e,index)=>(<div key={index} onClick={()=>setChange(e)} className='tabs'>{e}</div>))}
    </div>

    <div  className='cell-display'>
    {    
    (change ==='Acrilico') ? <div >
        <div className={`cellCheck  ${(acList.every(cell => cell == false)) ?'verde': ''}`}>           
                PVC 8 MM
        </div>
    </div> : ''
    }
        {
            (change ==='Acrilico') ? <div  className='cell-corte '>
                
                {
                acList.map((e,index)=>(<div key={index} onClick={()=> checkAc(e,index)}>
                        <Cell class={(e == '') ? 'verde' : 'branco'} cont={change+'-0' +(index+1)}/>
                 </div>
                ))
            }</div> : ''
        }

{    
        (change ==='PVC') ? <div >
            <div className={`cellCheck  ${(pvcList.every(cell => cell == false)) ?'verde': ''}`}>           
                    PVC 6 MM
            </div>
        </div> : ''
        }
        
        {
            (change ==='PVC') ? <div  className='cell-corte '>{
                pvcList.map((e,index)=>(<div key={index} onClick={()=> checkPvc(e,index,change)}>
                    <Cell class={(e == '') ? 'verde' : 'branco'}  cont={change+'-0'+(index+1)}/></div>))
            }</div> : ''
        }

{
            (change ==='Reforço') ? <div  className='cell-corte '>{
                reforcoList.map((e,index)=>(<div key={index} onClick={()=> checkReforco(e,index,change)}>
                    <Cell class={(e == '') ? 'verde' : 'branco'}  cont={change+'-0'+(index+1)}/></div>))
            }</div> : ''
        }
        
    </div>
</div>
    
    
  )

  
}

export default CheckItem