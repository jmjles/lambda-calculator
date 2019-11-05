import React from "react";
import "./App.css";

import Logo from "./components/DisplayComponents/Logo";
import NumberBtns from './components/ButtonComponents/NumberButtons/NumberButton';
import OperatorBtns from './components/ButtonComponents/OperatorButtons/OperatorButton';
import SpecialsBtns from './components/ButtonComponents/SpecialButtons/SpecialButton';

import Display from './components/DisplayComponents/Display'
function App() {

  return (
    <div className="container">
      <Logo />
      <div className="App">
        <Display/>
        <div className="btns">
          <div className="flex">
            <SpecialsBtns />
            <NumberBtns />
          </div>
          <OperatorBtns />
        </div>
      </div>
    </div>
  );
}

export default App;
