import React from 'react';
import { useState } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

//failing when calling dispatch
//add use dispatch
import { useDispatch } from 'react-redux';
//import components
import Header from '../Header/Header';
//import Understanding from '../Understanding/Understanding';

//send axios post instead?
import axios from 'axios';
import './App.css';

function App() {
  const [inputFeeling, setInputFeeling] = useState('');

  const dispatch = useDispatch();

  const handleSubmitFeeling = (event) => {
    console.log('In my FEELINGS');
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
    setInputFeeling('');
  };

  //onchange event
  const handleAddFeeling = (event) => {
    setInputFeeling(event.target.value);
  };

  return (
    <div className="App">
      <Header />
      <form>
        <label>Feeling? </label>
        <input
          data-testid="input"
          onChange={handleAddFeeling}
          value={inputFeeling}
        />
        <button data-testid="next" type="button" onClick={handleSubmitFeeling}>
          NEXT
        </button>
      </form>
    </div>
  );
}

export default App;
