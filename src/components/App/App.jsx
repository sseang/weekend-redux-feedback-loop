import React from 'react';
import { useState } from 'react';

import axios from 'axios';
import './App.css';

function App() {
  const [inputFeeling, setInputFeeling] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <form>
        <label>Feeling? </label>
        <input
          data-testid="input"
          onChange={(event) => setInputFeeling(event.target.value)}
          value={inputFeeling}
        />
        <button data-testid="next">NEXT</button>
      </form>
    </div>
  );
}

export default App;
