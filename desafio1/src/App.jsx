import './App.css';
import { useState } from 'react';

function App() {
  const [list,setList] = useState([])
  const [undid,setUndid] = useState([])

  const handleclick= (e) =>{
    const newDot = {
      clientX: e.clientX,
      clientY: e.clientY
    }
    
    setList((prev) =>[...prev,newDot]);
    setUndid([]);
    


  }

  const handleUndo = (e) =>{
    e.stopPropagation();
    if (list.length === 0 ) {
      return 0;
    }
    
    const lastItem = list[list.length-1];
    
    setUndid((prev) => [...prev,lastItem])
    setList((prev)=>{
      const newArr = [...prev].slice(0,-1);
      return newArr;
      
    })};
  
    const handleReDo = (e) =>{
      e.stopPropagation();
      

      if (undid.length === 0 ) {
        return 0;
      }

      const recoveredDot = undid[undid.length-1]

      setUndid((prev) =>{
        const newArr = [...prev].slice(0,-1)
        return newArr
      })
      setList((prev) =>[...prev,recoveredDot]);

    }


  return (
    <div id="page" onClick={handleclick}>
      <button className='botao' onClick={handleUndo}> Desfazer</button>
      <button className='botao' onClick={handleReDo}> Refazer</button>
      {list.map(item => (
        <span key={item.clientX} className="dot" style={{left: item.clientX,top: item.clientY}}/>
      ))}
      
    </div>
  );
}

export default App;
