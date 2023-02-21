import React, { Component } from "react";
import './App.css';
import './components/Piano.css';

// Import your audio file
import Do from "./Notas-Piano/do.wav";
import Re from "./Notas-Piano/Re.wav"
import Mi from "./Notas-Piano/Mi.wav"
import Fa from "./Notas-Piano/Fa.wav"
import La from "./Notas-Piano/La.wav"
import Sol from "./Notas-Piano/Sol.wav"
import Si from "./Notas-Piano/Si.wav"
import Key from "./components/Key";


 

class App extends Component {
  // Create state
  state = {

    // Get audio file in a variable
    Do: new Audio(Do),
    Re: new Audio(Re),
    Mi: new Audio(Mi),
    Fa: new Audio(Fa),
    La: new Audio(La),
    Sol: new Audio(Sol),
    Si: new Audio(Si),

    // Set initial state of song
    isPlaying: false,
  };

  // Main function to handle both play and pause operations
  

  Do=() =>{
    this.state.Do.play()
  }

  Re=() =>{
    this.state.Re.play()
  }

  Mi=() =>{
    this.state.Mi.play()
  }

  Fa=() =>{
    this.state.Fa.play()
  }

  Sol=() =>{
    this.state.Sol.play()
  }

  La=() =>{
    this.state.La.play()
  }

  Si=() =>{
    this.state.Si.play()
  }

  render() {
    return (
      <div className="piano">
        <Key note="c"/>
        <Key note="df"/>
        <Key note="d"/>
        <Key note="ef"/>
        <Key note="e"/>
        <Key note="f"/>
        <Key note="gf"/>
        <Key note="g"/>
        <Key note="af"/>
        <Key note="a"/>
        <Key note="bf"/>
        <Key note="b"/>
        <div><button className="key" onClick={this.Do}> Dó </button></div>
        <div><button className="key" onClick={this.Re}>Ré</button></div>
        <div><button className="key" onClick={this.Mi}>Mi</button></div>
        <div><button className="key" onClick={this.Fa}>Fa</button></div>
        <div><button className="key" onClick={this.Sol}>Sol</button></div>
        <div><button className="key" onClick={this.La}>La</button></div>
        <div><button className="key" onClick={this.Si}>Si</button></div>
        
      </div>
    );
  }
}

export default App;
