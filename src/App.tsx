import React, { useState } from 'react';
import { Button } from './components/Button';

import "./style/reset.css"
import "./style/style.css"

function App() {

  const simbols : (string | number)[] = [0, "=", ".", "/", 7, 8, 9, "X", 4, 5, 6, "-", 1, 2, 3, "+", "ON", "C", "%"];
  //const showDisplay = useState();

  return (
    <main className='calculator__container'>
      <input 
      className='visor__calculator'
      type="text"
      contentEditable="false" />
      <ul className='buttons__list'>
          {simbols.map((value, index) => {
            return <Button
            value={value}
            />
          })}
      </ul>
    </main>
  );
}

export default App;
