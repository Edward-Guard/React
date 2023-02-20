import React, { Component } from "react";
import './App.css';

// Import your audio file
import Do from "./Notas-Piano/do.wav";
import Re from "./Notas-Piano/Re.wav"
import Mi from "./Notas-Piano/Mi.wav"
import Fa from "./Notas-Piano/Fa.wav"
import La from "./Notas-Piano/La.wav"
import Sol from "./Notas-Piano/Sol.wav"
import Si from "./Notas-Piano/Si.wav"

 

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
      <div className="teclado">
        <button className="nota" onClick={this.Do}> Dó </button>
        <button className="nota" onClick={this.Re}>Ré</button>
        <button className="nota" onClick={this.Mi}>Mi</button>
        <button className="nota" onClick={this.Fa}>Fá</button>
        <button className="nota" onClick={this.Sol}>Sol</button>
        <button className="nota" onClick={this.La}>LA</button>
        <button className="nota" onClick={this.Si}>Si</button>
      </div>
    );
  }
}

export default App;
