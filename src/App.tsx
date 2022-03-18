import React, { useState } from 'react';
import { Button } from './components/Button';

import "./style/reset.css"
import "./style/style.css"


type ValueDisplayProps = string | number;

function App() {

  const simbols : (string | number)[] = [0, "=", ".", "/", 7, 8, 9, "X", 4, 5, 6, "-", 1, 2, 3, "+", "ON", "C", "%"];
  
  return (
    <main className='calculator__container'>
      <input 
      className='visor__calculator'
      id='visor__calculator'
      type="text"
      contentEditable="false" 
      value=""
      />
      <ul className='buttons__list'>
          {simbols.map((value, index) => {
            return <Button
            value={value}
            key={index}
            />
          })}
      </ul>
    </main>
  );
}

export default App;
