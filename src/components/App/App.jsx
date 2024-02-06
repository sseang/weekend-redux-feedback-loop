import React from 'react';
import { useState } from 'react';
//add use dispatch
import { useDispatch } from 'react-redux';

import axios from 'axios';
import './App.css';

function App() {
  const [inputFeeling, setInputFeeling] = useState('');
  //var for dispatch
  const dispatch = useDispatch();

  const handleSubmitFeeling = (event) => {
    //prevent refresh
    event.preventDefault();
    //action to storeInstance
    dispatch({
      //payload to store: REMEMBER to create reducer in store.js and add wrap PROVIDER!!
      type: 'FEELING_COLUMN_ADD',
      payload: {
        feeling: inputFeeling,
      },
    });
  };

  //onchange event
  const handleAddFeeling = (event) => {
    setInputFeeling(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <form onSubmit={handleSubmitFeeling}>
        <label>Feeling? </label>
        <input
          data-testid="input"
          onChange={handleAddFeeling}
          value={inputFeeling}
        />
        <button data-testid="next" type="submit">
          NEXT
        </button>
      </form>
    </div>
  );
}

export default App;
